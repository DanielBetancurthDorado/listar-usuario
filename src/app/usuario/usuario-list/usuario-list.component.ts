import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';
@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

/**
     * The list of users which belong to the Events
 */ 
usuarios: Usuario[]=[{id:12, name:"Siruela"}, {id:13,name:"Planeta"}];
  constructor() { }

  ngOnInit() {
  }

}