import { NumberSymbol } from '@angular/common';
import { Time } from '@angular/common';
import { Injectable } from '@angular/core';

export class Customer {
    ID: string = '';
    name: string = '';
    Address: string = '';
    time: string =  '';
    totalprice: string = '0';
    status: string = '';

}


let customers: Customer[] = [{
    "ID": "1234565",
    "name": "cơm chiên dương châu",
    "Address": "Phòng 2, tầng 3",
    "time": "28/06/2021 12:32:34",
    "totalprice": "90.000đ",
    "status": "Đã giao",
}, {
    "ID": "1234565",
    "name": "cơm chiên dương châu",
    "Address": "Phòng 2, tầng 3",
    "time": "28/06/2021 12:32:34",
    "totalprice": "90.000đ",
    "status": "Đã giao",
}, {
    "ID": "1234565",
    "name": "cơm chiên dương châu",
    "Address": "Phòng 2, tầng 3",
    "time": "28/06/2021 12:32:34",
    "totalprice": "90.000đ",
    "status": "Đã giao",
}, {
    "ID": "1234565",
    "name": "cơm chiên dương châu",
    "Address": "Phòng 2, tầng 3",
    "time": "28/06/2021 12:32:34",
    "totalprice": "90.000đ",
    "status": "Đã giao",
}, {
    "ID": "1234565",
    "name": "cơm chiên dương châu",
    "Address": "Phòng 2, tầng 3",
    "time": "28/06/2021 12:32:34",
    "totalprice": "90.000đ",
    "status": "Đã giao",
}, {
    "ID": "1234565",
    "name": "cơm chiên dương châu",
    "Address": "Phòng 2, tầng 3",
    "time": "28/06/2021 12:32:34",
    "totalprice": "90.000đ",
    "status": "Đã giao",
}, {
    "ID": "1234565",
    "name": "cơm chiên dương châu",
    "Address": "Phòng 2, tầng 3",
    "time": "28/06/2021 12:32:34",
    "totalprice": "90.000đ",
    "status": "Đã giao",
}, {
    "ID": "1234565",
    "name": "cơm chiên dương châu",
    "Address": "Phòng 2, tầng 3",
    "time": "28/06/2021 12:32:34",
    "totalprice": "90.000đ",
    "status": "Đã giao",
}, {
    "ID": "1234565",
    "name": "cơm chiên dương châu",
    "Address": "Phòng 2, tầng 3",
    "time": "28/06/2021 12:32:34",
    "totalprice": "90.000đ",
    "status": "Đã giao",
}, {
    "ID": "1234565",
    "name": "cơm chiên dương châu",
    "Address": "Phòng 2, tầng 3",
    "time": "28/06/2021 12:32:34",
    "totalprice": "90.000đ",
    "status": "Đã giao",
}, {
    "ID": "1234565",
    "name": "cơm chiên dương châu",
    "Address": "Phòng 2, tầng 3",
    "time": "28/06/2021 12:32:34",
    "totalprice": "90.000đ",
    "status": "Đã giao",
}, {
    "ID": "1234565",
    "name": "cơm chiên dương châu",
    "Address": "Phòng 2, tầng 3",
    "time": "28/06/2021 12:32:34",
    "totalprice": "90.000đ",
    "status": "Đã giao",
},{
  "ID": "1234565",
  "name": "cơm chiên dương châu",
  "Address": "Phòng 2, tầng 3",
  "time": "28/06/2021 12:32:34",
  "totalprice": "90.000đ",
  "status": "Đã giao",
},{
  "ID": "1234565",
  "name": "cơm chiên dương châu",
  "Address": "Phòng 2, tầng 3",
  "time": "28/06/2021 12:32:34",
  "totalprice": "90.000đ",
  "status": "Đã giao",
},{
  "ID": "1234565",
  "name": "cơm chiên dương châu",
  "Address": "Phòng 2, tầng 3",
  "time": "28/06/2021 12:32:34",
  "totalprice": "90.000đ",
  "status": "Đã giao",
},{
  "ID": "1234565",
  "name": "cơm chiên dương châu",
  "Address": "Phòng 2, tầng 3",
  "time": "28/06/2021 12:32:34",
  "totalprice": "90.000đ",
  "status": "Đã giao",
},{
  "ID": "1234565",
  "name": "cơm chiên dương châu",
  "Address": "Phòng 2, tầng 3",
  "time": "28/06/2021 12:32:34",
  "totalprice": "90.000đ",
  "status": "Đã giao",
},{
  "ID": "1234565",
  "name": "cơm chiên dương châu",
  "Address": "Phòng 2, tầng 3",
  "time": "28/06/2021 12:32:34",
  "totalprice": "90.000đ",
  "status": "Đã giao",
},{
  "ID": "1234565",
  "name": "cơm chiên dương châu",
  "Address": "Phòng 2, tầng 3",
  "time": "28/06/2021 12:32:34",
  "totalprice": "90.000đ",
  "status": "Đã giao",
},{
  "ID": "1234565",
  "name": "cơm chiên dương châu",
  "Address": "Phòng 2, tầng 3",
  "time": "28/06/2021 12:32:34",
  "totalprice": "90.000đ",
  "status": "Đã giao",
},{
  "ID": "1234565",
  "name": "cơm chiên dương châu",
  "Address": "Phòng 2, tầng 3",
  "time": "28/06/2021 12:32:34",
  "totalprice": "90.000đ",
  "status": "Đã giao",
},{
  "ID": "1234565",
  "name": "cơm chiên dương châu",
  "Address": "Phòng 2, tầng 3",
  "time": "28/06/2021 12:32:34",
  "totalprice": "90.000đ",
  "status": "Đã giao",
},{
  "ID": "1234565",
  "name": "cơm chiên dương châu",
  "Address": "Phòng 2, tầng 3",
  "time": "28/06/2021 12:32:34",
  "totalprice": "90.000đ",
  "status": "Đã giao",
},{
  "ID": "1234565",
  "name": "cơm chiên dương châu",
  "Address": "Phòng 2, tầng 3",
  "time": "28/06/2021 12:32:34",
  "totalprice": "90.000đ",
  "status": "Đã giao",
}, {
    "ID": "1234565",
    "name": "cơm chiên dương châu",
    "Address": "Phòng 2, tầng 3",
    "time": "28/06/2021 12:32:34",
    "totalprice": "90.000đ",
    "status": "Đã giao",
}, {
    "ID": "1234565",
    "name": "cơm chiên dương châu",
    "Address": "Phòng 2, tầng 3",
    "time": "28/06/2021 12:32:34",
    "totalprice": "90.000đ",
    "status": "Đã giao",

}];

@Injectable()
export class Service {
    getCustomers() {
        return customers;
    }

}
