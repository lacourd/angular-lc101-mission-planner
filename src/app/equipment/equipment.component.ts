import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipmentItems = ["Habitat dome","Drones","Food containers","Oxygen tanks"];

  equipmentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(itemToAdd: string) {
    if (!this.equipmentItems.includes(itemToAdd)) {
      this.equipmentItems.push(itemToAdd);
    }
  }

  remove(item: string) {
    let index = this.equipmentItems.indexOf(item);
    this.equipmentItems.splice(index,1);
  }

  edit(item: string) {
    this.equipmentBeingEdited = item;
  }

  save(updatedItem:string, originalItem: string) {
    let index = this.equipmentItems.indexOf(originalItem);
    this.equipmentItems[index] = updatedItem
    this.equipmentBeingEdited=null;
  }

}
