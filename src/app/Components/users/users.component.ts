import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';

import { customers } from './customers';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import {
  GridComponent, PageSettingsModel,
  FilterSettingsModel,
  ToolbarItems,
  EditSettingsModel
} from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar';





setCulture('fa-FA');

L10n.load({
  'fa-FA': {
    'grid': {
      'EmptyRecord': 'هیچ رکوردی برای نمایش وجود ندارد',
      'GroupDropArea': 'برای گروه بندی ستون مورد نظر را به اینجا بکشید',
      'UnGroup': 'برای گروه‌بندی اینجا را کلیک کنید',
      'EmptyDataSourceError': 'منبع داده نباید در بار اولیه خالی باشد زیرا ستون ها از منبع داده در منبع خودکار ستون تولید می شوند',
      'Item': 'آیتم',
      'Items': 'آیتم ها',
      'Add': 'جدید',
      'Columnchooser': 'انتخاب ستون',
      'SearchColumns': 'جستجوی ستون',
      'Search': 'جستجو',
      'Edit': 'ویرایش',
      'Cancel': 'لغو',
      'Update': 'اعمال تغییرات',
      'Delete': 'حذف',
      'Print': 'چاپ',
      'ChooseColumns': 'انتخاب ستون',
      'Pdfexport': 'خروجی pdf',
      'Excelexport': 'خروجی اکسل',
      'Wordexport': 'خروجی ورد',
      'Csvexport': 'خروجی csv',
      'OKButton': 'بلی',
      'CancelButton': 'خیر',
      'FilterButton': 'فیلتر',
      'ClearButton': 'حذف فیلتر',
      'EnterValue': 'مقداری وارد نمایید',
      'SelectAll': 'انتخاب همه',
      'StartsWith': 'شروع شود با',
      'EndsWith': 'ختم شود به',
      'Contains':'حاوی',
      'Equal': 'مساوی',
      'NotEqual': 'نا مساوی',





    },
    'pager': {
      'currentPageInfo': '{0} از {1} صفحه',
      'totalItemsInfo': '({0} آیتم)',
      'firstPageTooltip': 'به صفحه اول بروید',
      'lastPageTooltip': 'به صفحه آخر بروید',
      'nextPageTooltip': 'به صفحه بعد بروید',
      'previousPageTooltip': 'به صفحه قبل بروید',
      'nextPagerTooltip': 'به صفحه بعد بروید',
      'previousPagerTooltip': 'به صفحه قبل بروید',
      'pagerDropDown':'ایتم در هر صفحه'
    }
  }
});





@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']

})
export class UsersComponent implements OnInit {
  constructor(private builder: FormBuilder) {

  }

  public data: object[];

  public pageSettings: PageSettingsModel;
  public filterOptions: FilterSettingsModel;
  public toolbarOptions: ToolbarItems[];
  public editSettings: EditSettingsModel;

  public grid: GridComponent;
  ngOnInit(): void {
    this.data = customers;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      allowEditOnDblClick: true,
      allowNextRowEdit: true
    };
    this.pageSettings = { pageSize: 12, pageSizes: true,pageCount:10 };
    this.filterOptions = { type: 'Menu' };
    this.toolbarOptions = [
      'Search',
      'Add',
      'Delete',
      'Edit',
      'Cancel',
      'Update',
      'ColumnChooser',
      'CsvExport',
      'ExcelExport',
      'PdfExport',
      'WordExport',
      'Print'
    ];
  }
  toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'Grid_pdfexport') {
      // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
      this.grid.pdfExport();
    } else if (args.item.id === 'Grid_excelexport') {
      // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
      this.grid.excelExport();
    }
  }


}

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users.dialog.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersDialogComponent { }
