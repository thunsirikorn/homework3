import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';


interface TreeMenu {
  name: string;
  children?: TreeMenu[];
}

const TREE_DATA: TreeMenu[] = [
  {
    name: 'Text Editor',
    children: [
      {name: 'Notepad'},
      {name: 'Edit Plus'},
      {name: 'VS code'},
    ]
  }, {
    name: 'Workbench'
  }, {
    name: 'Windows',
    children: [
      {
        name: 'Office',
        children: [
          {name: 'Excel'},
          {name: 'Word'},
          {name: 'Powerpoint'},
          {name: 'Outlook'},
        ]
      }, {
        name: 'Other',
        children: [
          {name: 'Media Player'},
          {name: 'IE'},
          {name: 'Chrome'},
        ]
      },
    ]
  },{
    name: 'Features',
    children: [
      {name: 'Features 1'},
      {name: 'Features 2'},
      {name: 'Features 3'},
    ]
  }, {
    name: 'Application',
    children: [
      {name: 'Game 1'},
      {name: 'Game 2'},
      {name: 'Game 3'},
    ]
  }, {
    name: 'Extensions'
  },
];

interface TreeMenuFlat {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent  {

  private _transformer = (node: TreeMenu, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<TreeMenuFlat>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
   }

   hasChild = (_: number, node: TreeMenuFlat) => node.expandable;


/*
ngOnInit(): void {
  }  */

}
