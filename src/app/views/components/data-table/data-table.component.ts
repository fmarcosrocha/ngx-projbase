import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UsuarioDTO {
  cpf: string;
  nome: string;
  genitora: string;
  dataNascimento: string;
}

const ELEMENT_DATA: UsuarioDTO[] = [
  { cpf: '111.623.470-79', nome: 'Mour', genitora: 'Noawen', dataNascimento: '14/05/1985' },
  { cpf: '700.584.370-37', nome: 'Deuisna', genitora: 'Kyuhe', dataNascimento: '25/05/1988' },
  { cpf: '129.358.450-99', nome: 'Neoro Kaema Deuisna Neoro Kaema', genitora: 'Neoro Kaema Neoro Kaema Deuisna', dataNascimento: '14/05/1990' },
  { cpf: '791.540.700-74', nome: 'Kaema ', genitora: 'Viuhi', dataNascimento: '13/05/1975' },
  { cpf: '999.263.750-43', nome: 'Cehel', genitora: 'Dusea', dataNascimento: '10/05/1980' },
  { cpf: '765.011.400-72', nome: 'Muluohe Ceol Xaepoal', genitora: 'Muluohe Ceol Xaepoal', dataNascimento: '08/05/1980' },
  { cpf: '789.193.880-67', nome: 'Clual', genitora: 'Xaepoal', dataNascimento: '11/05/1975' },
  { cpf: '269.985.110-86', nome: 'Zuaer', genitora: 'Xifaunai', dataNascimento: '28/05/1966' },
  { cpf: '611.396.270-90', nome: 'Irmopor', genitora: 'Leyelfun', dataNascimento: '14/05/1974' },
  { cpf: '344.711.500-90', nome: 'Puass', genitora: 'Feozus', dataNascimento: '26/05/1994' },
  { cpf: '288.741.380-59', nome: 'Hiobe', genitora: 'Cyewo', dataNascimento: '07/05/1995' },
  { cpf: '698.212.870-93', nome: 'Baceurin', genitora: 'Funul', dataNascimento: '06/05/1988' },
  { cpf: '461.031.080-55', nome: 'Luywi', genitora: 'Dunol', dataNascimento: '01/05/1987' }
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html'
})

export class DatatableComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = "Exibir";
    this.paginator._intl.nextPageLabel = "Próxima página";
    this.paginator._intl.lastPageLabel = "Última página";
    this.paginator._intl.previousPageLabel = "Página anterior";
    this.paginator._intl.firstPageLabel = "Primeira página";

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  colunas: string[] = ['_select', 'cpf', 'nome', 'genitora', 'dataNascimento', '_action'];
  dataSource = new MatTableDataSource<UsuarioDTO>(ELEMENT_DATA);

  public filtroCtrl = {
    exibirPesquisa: false,
    exibir: () => {
      this.filtroCtrl.exibirPesquisa = !this.filtroCtrl.exibirPesquisa;

      if (!this.filtroCtrl.exibirPesquisa) {
        this.dataSource.filter = '';
      }
    },
    filtrar: (target: any) => {
      this.dataSource.filter = target!.value;
    }
  }

  public ordenacaoCtrl = {
    direcao: 'asc',
    mudar: () => {
      this.ordenacaoCtrl.direcao = this.ordenacaoCtrl.direcao === 'asc' ? 'desc' : 'asc';
      this.ordenacaoCtrl.ordenar();
    },
    ordenacao: '',
    ordenar: () => {
      this.sort.sort(({ id: this.ordenacaoCtrl.ordenacao, start: this.ordenacaoCtrl.direcao }) as MatSortable);
      this.dataSource.sort = this.sort;
    }
  }

  public selecaoCtrl = {
    itens: new SelectionModel<UsuarioDTO>(true, []),
    selecionarTodos: () => {
      this.selecaoCtrl.verificaTodosSelecionados() ?
      this.selecaoCtrl.itens.clear() :
      this.dataSource.data.forEach(row => this.selecaoCtrl.itens.select(row));
    },
    verificaTodosSelecionados: () => {
      const numSelected = this.selecaoCtrl.itens.selected.length;
      const numRows = this.dataSource.data.length;

      return numSelected === numRows;
    }
  }
}