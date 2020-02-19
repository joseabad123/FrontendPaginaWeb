import { ItemCategory } from './itemCategory';

export class Menu {

    menu_item_id: number;
    url:string;
    name: string;

    order: number;
    item_category_id: ItemCategory;
    

    constructor(menu_id?: number,  url?:string,order?: number, name?: string, item_category_id?: ItemCategory){
        this.menu_item_id = menu_id,
        this.name = name,
        this.url=url,
        this.order = order,
        this.item_category_id = item_category_id
        
    }

}