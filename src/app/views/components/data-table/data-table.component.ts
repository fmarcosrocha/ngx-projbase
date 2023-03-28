import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface User {
  name: string;
  lastname: string;
  birthdate: string;
}

const ELEMENT_DATA: User[] = [
  { name: 'Mour', lastname: 'Noawen', birthdate: '14/05/1985' },
  { name: 'Deuisna', lastname: 'Kyuhe', birthdate: '25/05/1988' },
  { name: 'Neoro', lastname: 'Deuisna', birthdate: '14/05/1990' },
  { name: 'Kaema ', lastname: 'Viuhi', birthdate: '13/05/1975' },
  { name: 'Cehel', lastname: 'Dusea', birthdate: '10/05/1980' },
  { name: 'Muluohe', lastname: 'Xaepoal', birthdate: '08/05/1980' },
  { name: 'Clual', lastname: 'Xaepoal', birthdate: '11/05/1975' },
  { name: 'Zuaer', lastname: 'Xifaunai', birthdate: '28/05/1966' },
  { name: 'Irmopor', lastname: 'Leyelfun', birthdate: '14/05/1974' },
  { name: 'Puass', lastname: 'Feozus', birthdate: '26/05/1994' },
  { name: 'Hiobe', lastname: 'Cyewo', birthdate: '07/05/1995' },
  { name: 'Baceurin', lastname: 'Funul', birthdate: '06/05/1988' },
  { name: 'Luywi', lastname: 'Dunol', birthdate: '01/05/1987' }
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html'
})

export class DatatableComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = "Show";
    this.paginator._intl.nextPageLabel = "Next page";
    this.paginator._intl.lastPageLabel = "Last page";
    this.paginator._intl.previousPageLabel = "Previous page";
    this.paginator._intl.firstPageLabel = "First page";

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  columns: string[] = ['_select', 'name', 'lastname', 'birthdate', '_action'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  public filtroCtrl = {
    showSearch: false,
    show: () => {
      this.filtroCtrl.showSearch = !this.filtroCtrl.showSearch;

      if (!this.filtroCtrl.showSearch) {
        this.dataSource.filter = '';
      }
    },
    filter: (target: any) => {
      this.dataSource.filter = target!.value;
    }
  }

  public sortCtrl = {
    direction: 'asc',
    change: () => {
      this.sortCtrl.direction = this.sortCtrl.direction === 'asc' ? 'desc' : 'asc';
      this.sortCtrl.sort();
    },
    sorting: '',
    sort: () => {
      this.sort.sort(({ id: this.sortCtrl.sorting, start: this.sortCtrl.direction }) as MatSortable);
      this.dataSource.sort = this.sort;
    }
  }

  public selectionCtrl = {
    items: new SelectionModel<User>(true, []),
    selectAll: () => {
      this.selectionCtrl.checkSelecteds() ?
      this.selectionCtrl.items.clear() :
      this.dataSource.data.forEach(row => this.selectionCtrl.items.select(row));
    },
    checkSelecteds: () => {
      const numSelected = this.selectionCtrl.items.selected.length;
      const numRows = this.dataSource.data.length;

      return numSelected === numRows;
    }
  }
}
