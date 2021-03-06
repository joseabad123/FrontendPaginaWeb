import { Component, OnInit, ViewChild } from '@angular/core';

//Services
import { MenuService } from '../../services/menu.service';
import { ItemCategoryService } from '../../services/itemCategory.service';

//Models
import { ItemCategory } from '../../models/itemCategory';
import { Menu } from '../../models/menu';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listItemCategories: ItemCategory[] = [];
  listMenu: Menu[] = [];
  menuForm: FormGroup;
  data:MatTableDataSource<any>;

  constructor(
    private menuService: MenuService,
    private itemCategoryService: ItemCategoryService,
  ) {
    this.menuForm = this.createFormGroup();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  updateListItemCategories() {
    this.itemCategoryService.getItemCategories().subscribe(itemCategories => {
      this.listItemCategories = itemCategories;

    });
  }

  //All 
  updateListMenu() {
    this.menuService.getMenu().subscribe(menu => {
      this.listMenu = menu;
      this.data= new MatTableDataSource<Menu>(this.listMenu);
      this.data.paginator=this.paginator;
    },
      error => {
        alert(JSON.stringify(error));
      }
    );
  }
//Filter the table
applyFilter(filterValue: string) {
  this.data.filter = filterValue.trim().toLowerCase();
}
  deleteMenu(id: number) {
    this.menuService.deleteMenu(id).subscribe(menu => {
      this.updateListMenu();
    },
      error => {
        alert(JSON.stringify(error));
      })

  }

  updateMenu(id: number) {
    alert(JSON.stringify(this.menuForm.valueChanges));
  }


  ngOnInit() {
    this.updateListMenu();
    this.updateListItemCategories();
  }

  displayedColumns: string[] = ['name', 'order','itemCategory', 'delete', 'update'];

  createFormGroup() {
    return new FormGroup({
      menu_id: new FormControl(),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(45)
      ]),
      url: new FormControl('', [
        Validators.required,
      ]),
      order: new FormControl('', [
        Validators.required,
      ]),
      item_category_id: new FormControl('', [
        Validators.required,
      ]), 
    });
  }

  //Load data in form
  loadData(menuEdit: Menu) {
    this.menuForm.setValue({
      menu_id: menuEdit.menu_item_id,
      name: menuEdit.name,
      url:menuEdit.url,
      order: menuEdit.order,
      item_category_id: menuEdit.item_category_id,
      

    })
  }

  //submit form
  submitForm() {
    if (this.menuForm.value.menu_item_id == null) {
      if (this.menuForm.valid) {
        this.menuService.createMenu(this.menuForm.value).subscribe(menu => {
          this.updateListMenu();
        }, error => {
          alert(JSON.stringify(error));
        })
        this.resetForm();
      }
    }
    else {
      if (this.menuForm.valid) {
        this.menuService.updateMenu(this.menuForm.value).subscribe(menu => {
          this.updateListMenu();
        })
        this.resetForm();
      }
    }
  }

  //reset form
  resetForm() {
    let control: AbstractControl = null;
    this.menuForm.reset({ active: false });
    this.menuForm.markAsUntouched();
    Object.keys(this.menuForm.controls).forEach((nameControl) => {control = this.menuForm.controls[nameControl];
      control.setErrors(null);
    });
  }

}
