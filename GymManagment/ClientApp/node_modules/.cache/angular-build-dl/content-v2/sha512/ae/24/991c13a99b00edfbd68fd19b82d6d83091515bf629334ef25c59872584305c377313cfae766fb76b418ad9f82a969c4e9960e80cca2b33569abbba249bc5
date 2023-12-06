(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+1wY":
/*!********************************************************************!*\
  !*** ./src/app/renewal-membership/renewal-membership.component.ts ***!
  \********************************************************************/
/*! exports provided: RenewalMembershipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalMembershipComponent", function() { return RenewalMembershipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_renewal_membership_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./renewal-membership.component.html */ "mkfr");
/* harmony import */ var _renewal_membership_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renewal-membership.component.css */ "8sRu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Renders_btn_renderer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Renders/btn-renderer.component */ "0eGd");








let RenewalMembershipComponent = class RenewalMembershipComponent {
    constructor(gymServices, _router, route) {
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.frameworkComponents = {
            buttonRenderer: _Renders_btn_renderer_component__WEBPACK_IMPORTED_MODULE_7__["BtnRendererComponent"],
        };
        this.columnDefs = [
            {
                headerName: 'Id',
                field: 'MbrId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
            },
            {
                headerName: 'Name',
                field: 'MbrName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Mobile No',
                field: 'MbrMob',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Membership Plan',
                field: 'MbrShipName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Batch',
                field: 'MbrBatch',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Membership Type',
                field: 'MembershipType',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Last Payment',
                field: 'PaidAmt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Last Payment Date',
                field: 'PaidDt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Expire Date',
                field: 'MbrshipEndDt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Action',
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onBtnClick.bind(this),
                    label: 'Click'
                }
            },
        ];
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
    }
    onBtnClick(e) {
        return this._router.navigate(["/RenewalPayments"], { queryParams: e.rowData });
    }
    onGridReady(params) {
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetMembershipGoingtoExxpiredMembers().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                dataValue = result;
                params.api.setRowData(dataValue);
            }
            else {
                dataValue = "";
                params.api.setRowData(dataValue);
            }
        }, error => alert(error.message));
    }
};
RenewalMembershipComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
RenewalMembershipComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-renewal-membership',
        template: _raw_loader_renewal_membership_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_renewal_membership_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], RenewalMembershipComponent);



/***/ }),

/***/ "+cV6":
/*!*********************************************************************!*\
  !*** ./src/app/membership-history/membership-history.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnNoaXAtaGlzdG9yeS9tZW1iZXJzaGlwLWhpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "/A9N":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Chetan Work data\Work\Vs Prj\GYM Management\GymManagment\GymManagment\ClientApp\src\main.ts */"zUnb");


/***/ }),

/***/ "0cTf":
/*!*********************************************************!*\
  !*** ./src/app/add-expenses/add-expenses.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1leHBlbnNlcy9hZGQtZXhwZW5zZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "0eA4":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-reports/all-reports.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Reports</h4>\r\n\r\n        <form [formGroup]=\"AllReportsForm\" action=\"#\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div>\r\n                <hr />\r\n                <div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <input type=\"radio\" id=\"rdEyr\" value=\"YearlyReport\" name=\"allReports\" (change)=\"OnReportChanges($event)\">\r\n                            <label for=\"rdEyr\">Member Yearly Report</label><br>\r\n                        </div>\r\n                        <!--<div class=\"form-group col-md-4\">\r\n            <input type=\"radio\" id=\"rdFR\" value=\"FinantialReport\" name=\"allReports\" (change)=\"OnReportChanges($event)\">\r\n            <label for=\"rdFR\">Finantial Report</label><br>\r\n        </div>-->\r\n                        <div class=\"form-group col-md-4\">\r\n                            <input type=\"radio\" id=\"rdSummury\" value=\"Summury\" name=\"allReports\" (change)=\"OnReportChanges($event)\">\r\n                            <label for=\"rdSummury\">Summury</label><br>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n\r\n                        <div class=\"form-group col-md-4\">\r\n                            <input type=\"radio\" id=\"rdMr\" value=\"MbrShipReport\" name=\"allReports\" (change)=\"OnReportChanges($event)\">\r\n                            <label for=\"rdMr\">Membership Report</label><br>\r\n                        </div>\r\n                        <div class=\"form-group col-md-4\">\r\n                            <input type=\"radio\" id=\"edPt\" value=\"PersonalTraining\" name=\"allReports\" (change)=\"OnReportChanges($event)\">\r\n                            <label for=\"edPt\">Personal Training</label><br>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-row\" *ngIf=\"optionValue\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label>Select Member</label>\r\n                            <select formControlName=\"MemberId\" [(ngModel)]=\"MemberId\" class=\"form-control\"  >\r\n                                <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                                <option *ngFor=\"let mbr of _Members\" value={{mbr.MbrId}}>\r\n                                    {{mbr.MbrName}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <input type=\"submit\" class=\"fadeIn fourth\" value=\"Submit\">\r\n            </div>\r\n            <div>\r\n                <div class=\"form-row\">\r\n                    <h3> Report</h3><br>\r\n                    <img (click)=\"exportToExcel()\" src=\"./assets/excel-48.png\"   class = \"rptPicture\"/>\r\n\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                                 class=\"ag-theme-alpine\"\r\n                                 [columnDefs]=\"columnDefs\"\r\n                                 [animateRows]=\"true\"\r\n                                 (gridReady)=\"onGridReady($event)\"\r\n                                 [rowData]=\"rowData\"\r\n                                 pagination=\"true\"\r\n                                 paginationPageSize=\"20\">\r\n                </ag-grid-angular>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "0eGd":
/*!***************************************************!*\
  !*** ./src/app/Renders/btn-renderer.component.ts ***!
  \***************************************************/
/*! exports provided: BtnRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnRendererComponent", function() { return BtnRendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");




let BtnRendererComponent = class BtnRendererComponent {
    constructor(gymServices, _router) {
        this.gymServices = gymServices;
        this._router = _router;
    }
    agInit(params) {
        this.params = params;
    }
    refresh(param) {
        return true;
    }
    OnEditClick($event) {
        const params = {
            event: $event,
            rowData: this.params.node.data,
        };
        //return this._router.navigate(["/AddEmployee"]);
        this.params.onClick(params);
    }
};
BtnRendererComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_3__["GymService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BtnRendererComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-btn-renderer',
        template: '<img (click)="OnEditClick($event)" src="./assets/renew.png" alt="" class = "picture1" />',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_3__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], BtnRendererComponent);



/***/ }),

/***/ "0vPN":
/*!********************************************************!*\
  !*** ./src/app/gym-branches/gym-branches.component.ts ***!
  \********************************************************/
/*! exports provided: GymBranchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymBranchesComponent", function() { return GymBranchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_gym_branches_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./gym-branches.component.html */ "y96J");
/* harmony import */ var _gym_branches_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gym-branches.component.css */ "O6WU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../btn-cell-renderer/btn-cell-renderer.component */ "5oOU");







let GymBranchesComponent = class GymBranchesComponent {
    constructor(gymServices, _router) {
        this.gymServices = gymServices;
        this._router = _router;
        this.frameworkComponents = {
            buttonRenderer: _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_6__["BtnCellRendererComponent"],
        };
        this.columnDefs = [
            {
                headerName: 'Name',
                field: 'test2',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Address',
                field: 'test3',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Contact No',
                field: 'test3',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Action',
                cellRenderer: 'buttonRenderer',
                cellRendererParam: {}
            },
        ];
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
    }
    AddEmployee() {
        return this._router.navigate(["/AddBranches"]);
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        dataValue = [{ "test2": "Branch 1", "test3": "002" },
            { "test2": "Branch 2", "test3": "004" },
            { "test2": "Branch 3", "test3": "006" },
            { "test2": "Branch 4", "test3": "008" }];
        //this.gymServices.GetAllEmployee().subscribe(result => {
        //    if (!isNull(result.data)) {
        //        dataValue = result.data;
        //    }
        //    else {
        //        alert("Incorrect Creiditials");
        //    }
        //}, error => alert(error.message))
        params.api.setRowData(dataValue);
    }
};
GymBranchesComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
GymBranchesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-gym-branches',
        template: _raw_loader_gym_branches_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gym_branches_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], GymBranchesComponent);



/***/ }),

/***/ "2xHM":
/*!*******************************************************************!*\
  !*** ./src/app/remaining-balance/remaining-balance.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbWFpbmluZy1iYWxhbmNlL3JlbWFpbmluZy1iYWxhbmNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "3KRp":
/*!*******************************************************!*\
  !*** ./src/app/all-reports/all-reports.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label{\r\n    margin-left:10px;\r\n    font-size:medium;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLXJlcG9ydHMvYWxsLXJlcG9ydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hbGwtcmVwb3J0cy9hbGwtcmVwb3J0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgZm9udC1zaXplOm1lZGl1bTtcclxufSJdfQ== */");

/***/ }),

/***/ "3Vdu":
/*!********************************************************!*\
  !*** ./src/app/send-message/send-message.component.ts ***!
  \********************************************************/
/*! exports provided: SendMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessageComponent", function() { return SendMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_send_message_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./send-message.component.html */ "tiet");
/* harmony import */ var _send_message_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send-message.component.css */ "hesN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);








let SendMessageComponent = class SendMessageComponent {
    constructor(formBuilder, _router, gymServices) {
        this.formBuilder = formBuilder;
        this._router = _router;
        this.gymServices = gymServices;
        //dropdownList = [];
        this.selectedItems = [];
        this.submitted = false;
        this._Members = [];
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
        this.SendMsgForm = this.formBuilder.group({
            MbrType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrMessage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.GetAllMembers();
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'MbrId',
            textField: 'MbrName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }
    onSubmit() {
        debugger;
        this.submitted = true;
        if (!this.SendMsgForm.invalid) {
            this.gymServices.SendPromotionMessage(this.selectedItems).subscribe(result => {
                alert('Message Send');
            }, error => alert(error.message));
        }
    }
    onItemSelect(item) {
        this.selectedItems.push(item.MbrId);
    }
    onSelectAll(items) {
        this.selectedItems.push(items.map(x => x.MbrId));
    }
    GetAllMembers() {
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNull"])(result)) {
                this._Members = result.filter(x => x.MbrType == "GymMember");
            }
        }, error => alert(error.message));
    }
    get fval() {
        return this.SendMsgForm.controls;
    }
};
SendMessageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"] }
];
SendMessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-send-message',
        template: _raw_loader_send_message_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_send_message_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"]])
], SendMessageComponent);



/***/ }),

/***/ "3kGv":
/*!*******************************************************!*\
  !*** ./src/app/gym-profile/gym-profile.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d5bS1wcm9maWxlL2d5bS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "4cTV":
/*!*****************************************************************!*\
  !*** ./src/app/trainers-history/trainers-history.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWluZXJzLWhpc3RvcnkvdHJhaW5lcnMtaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "4uh6":
/*!**************************************************!*\
  !*** ./src/app/ptdetails/ptdetails.component.ts ***!
  \**************************************************/
/*! exports provided: PTDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PTDetailsComponent", function() { return PTDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ptdetails_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ptdetails.component.html */ "WUtA");
/* harmony import */ var _ptdetails_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ptdetails.component.css */ "Mw/O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../btn-cell-renderer/btn-cell-renderer.component */ "5oOU");








//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
let PTDetailsComponent = class PTDetailsComponent {
    constructor(gymServices, _router, route) {
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.frameworkComponents = {
            buttonRenderer: _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_7__["BtnCellRendererComponent"],
        };
        this.columnDefs = [
            {
                headerName: 'Id',
                field: 'MbrId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
            },
            {
                headerName: 'MbrUserId',
                field: 'MbrUserId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'MbrShipId',
                field: 'MbrShipId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'TrainerId',
                field: 'TrainerId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Name',
                field: 'MbrName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Mobile No',
                field: 'MbrMob',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Member Ship',
                field: 'MbrType',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Paid Amount',
                field: 'PaidAmt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Paid By',
                field: 'PaidBy',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Paid Dt',
                field: 'PaidDt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Start Dt',
                field: 'MbrshipStartDt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'End sDt',
                field: 'MbrshipEndDt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Action',
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onBtnClick.bind(this),
                    OnDelete: this.OnDeleteMember.bind(this),
                }
            },
        ];
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
    }
    AddPT() {
        return this._router.navigate(["/AddPTDetails"]);
    }
    onBtnClick(e) {
        /*alert(e.rowData);   */
        return this._router.navigate(["/AddPTDetails"], { queryParams: e.rowData });
    }
    onGridReady(params) {
        debugger;
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetAllPTMembers().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                dataValue = result;
                params.api.setRowData(dataValue);
            }
            else {
                dataValue = "";
                params.api.setRowData(dataValue);
            }
        }, error => alert(error.message));
    }
    OnDeleteMember(data) {
        this.gymServices.DeletePTMembers(data.MbrUserId).subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                alert('Member Deleted Successfully !');
                this.gymServices.GetAllPTMembers().subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                        this.rowData = result;
                    }
                    else {
                        this.rowData = "";
                    }
                }, error => alert(error.message));
            }
            else {
                alert("Error !");
            }
        }, error => alert(error.message));
    }
};
PTDetailsComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
PTDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ptdetails',
        template: _raw_loader_ptdetails_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ptdetails_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], PTDetailsComponent);



/***/ }),

/***/ "5eXO":
/*!*************************************************!*\
  !*** ./src/app/payments/payments.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "5oOU":
/*!******************************************************************!*\
  !*** ./src/app/btn-cell-renderer/btn-cell-renderer.component.ts ***!
  \******************************************************************/
/*! exports provided: BtnCellRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnCellRendererComponent", function() { return BtnCellRendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");




let BtnCellRendererComponent = class BtnCellRendererComponent {
    constructor(gymServices, _router) {
        this.gymServices = gymServices;
        this._router = _router;
    }
    agInit(params) {
        this.params = params;
    }
    refresh(param) {
        return true;
    }
    OnEditClick($event) {
        const params = {
            event: $event,
            rowData: this.params.node.data,
        };
        //return this._router.navigate(["/AddEmployee"]);
        this.params.onClick(params);
    }
    OnDelete($event) {
        const params = {
            event: $event,
            rowData: this.params.node.data,
        };
        if (window.confirm("Are you sure to delete ? ")) {
            this.params.OnDelete(this.params.node.data);
        }
    }
};
BtnCellRendererComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_3__["GymService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BtnCellRendererComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-btn-cell-renderer',
        template: '<img (click)="OnEditClick($event)" src="./assets/Edit_img.png" alt="" class = "picture1" /> <img (click)="OnDelete($event)" src="./assets/Delete_img.png" alt="" class = "picture1" />',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_3__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], BtnCellRendererComponent);



/***/ }),

/***/ "66QQ":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee.component.html */ "e7WC");
/* harmony import */ var _employee_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.component.css */ "/A9N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../btn-cell-renderer/btn-cell-renderer.component */ "5oOU");








//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
let EmployeeComponent = class EmployeeComponent {
    constructor(gymServices, _router, route) {
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.frameworkComponents = {
            buttonRenderer: _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_7__["BtnCellRendererComponent"],
        };
        this.columnDefs = [
            {
                headerName: 'Id',
                field: 'MbrId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Name',
                field: 'MbrName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Designaion',
                field: 'MbrType',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Mobile No',
                field: 'MbrMob',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'DOB',
                field: 'MbrDOB',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Email',
                field: 'MbrEmail',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Address',
                field: 'MbrAddr',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Member Ship',
                field: 'MbrShipName',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Action',
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onBtnClick.bind(this),
                    OnDelete: this.OnDeleteMember.bind(this),
                }
            },
        ];
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
    }
    AddEmployee() {
        return this._router.navigate(["/AddEmployee"]);
    }
    onBtnClick(e) {
        /*alert(e.rowData);   */
        return this._router.navigate(["/AddEmployee"], { queryParams: e.rowData });
    }
    onGridReady(params) {
        debugger;
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                dataValue = result;
                params.api.setRowData(dataValue);
            }
            else {
                dataValue = "";
                params.api.setRowData(dataValue);
            }
        }, error => alert(error.message));
    }
    OnDeleteMember(data) {
        this.gymServices.DeleteMember(data.MbrId).subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                alert('Member Deleted Successfully !');
                this.gymServices.GetAllMembers().subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                        this.rowData = result;
                    }
                    else {
                        this.rowData = "";
                    }
                }, error => alert(error.message));
            }
            else {
                alert("Error !");
            }
        }, error => alert(error.message));
    }
};
EmployeeComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
EmployeeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employee',
        template: _raw_loader_employee_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], EmployeeComponent);



/***/ }),

/***/ "6vlH":
/*!**********************************************************!*\
  !*** ./src/app/add-ptdetails/add-ptdetails.component.ts ***!
  \**********************************************************/
/*! exports provided: AddPTDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPTDetailsComponent", function() { return AddPTDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_ptdetails_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-ptdetails.component.html */ "U9FP");
/* harmony import */ var _add_ptdetails_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-ptdetails.component.css */ "dMQ9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









let AddPTDetailsComponent = class AddPTDetailsComponent {
    constructor(gymServices, formBuilder, _router, route, datepipe) {
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.route = route;
        this.datepipe = datepipe;
        this._PTMembers = [];
        this._PTTrainer = [];
        this._MbrPlans = [];
        this.submitted = false;
        this.MembershipType = 'PT';
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
        this.btnVal = 'Save';
        this.modelheaderval = 'Add PT Member';
        this.AddPTForm = this.formBuilder.group({
            MbrId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrUserId: [''],
            MbrShipId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            TrainerId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrPtDays: [''],
            PaidAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PaidBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PaidDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrshipStartDt: [''],
            MbrshipEndDt: [''],
            Discription: [''],
            PTSessions: [''],
            MbrPTChargesofTrainer: [''],
            MembershipType: [''],
        });
        this.route.queryParams.subscribe((params) => {
            if (params != null && params.MbrName != undefined) {
                //this.GetAllMemberShipPlan();
                //this.GetAllMembers();
                this.MbrId = params.MbrId;
                this.MbrUserId = params.MbrUserId;
                this.MbrShipId = params.MbrShipId;
                this.TrainerId = params.TrainerId;
                //this.MbrPtDays = params.MbrPtDays;  
                //this.showPersonalTrainingPlans(params.MbrShipId)
                this.PaidAmt = params.PaidAmt;
                this.PaidBy = params.PaidBy;
                this.PaidDt = params.PaidDt;
                this.MbrshipStartDt = params.MbrshipStartDt;
                this.MbrshipEndDt = params.MbrshipEndDt;
                this.Discription = params.Discription;
                this.PTSessions = params.PTSessions;
                this.MembershipType = 'PT';
                //this.MbrPTChargesofTrainer = params.MbrPTChargesofTrainer;
                //this.showPTTrainerCharges(params.MbrId)
                this.btnVal = 'update';
                this.modelheaderval = 'Update Member';
            }
        });
        this.GetAllMemberShipPlan();
        this.GetAllMembers();
    }
    get fval() {
        return this.AddPTForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (!this.AddPTForm.invalid) {
            if (this.btnVal == "Save") {
                debugger;
                this.gymServices.AddPTMembers(this.AddPTForm.value).subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                        alert(result);
                        return this._router.navigate(["/PTDetails"]);
                    }
                }, error => alert(error.message));
            }
            else { // Update 
                this.gymServices.UpdatePTMembers(this.AddPTForm.value).subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                        alert(result);
                        return this._router.navigate(["/PTDetails"]);
                    }
                }, error => alert(error.message));
            }
        }
    }
    onCancel() {
        return this._router.navigate(["/PTDetails"]);
    }
    GetAllMemberShipPlan() {
        this.gymServices.GetAllMemberShipPlan().subscribe(res => {
            this._MbrPlans = this._PTMembers = res.filter(x => x.PlanType == "PT");
            ;
            if (this.MbrShipId != undefined) {
                this.showPersonalTrainingPlans(this.MbrShipId);
            }
        }, error => alert(error.message));
    }
    onDateChange(value) {
        this.date = new Date(value.srcElement.value);
        this.date.setDate(this.date.getDate() + +this.MbrPtDays);
        this.MbrshipEndDt = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    }
    GetAllMembers() {
        debugger;
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                this._PTMembers = result.filter(x => x.MbrType == "GymMember");
                this._PTTrainer = result.filter(x => x.MbrType == "FloorManager" || x.MbrType == "Trainer");
                if (this.TrainerId != undefined) {
                    this.showPTTrainerCharges(this.TrainerId);
                }
            }
        }, error => alert(error.message));
    }
    showPersonalTrainingPlans(value) {
        this.MbrPtDays = this._MbrPlans.find(x => x.MbrShipId == value).MbrShipDurationInDays.toString();
    }
    showPTTrainerCharges(value) {
        this.MbrPTChargesofTrainer = this._PTTrainer.find(x => x.MbrId == value).MbrPTCharges;
    }
};
AddPTDetailsComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }
];
AddPTDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-ptdetails',
        template: _raw_loader_add_ptdetails_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_ptdetails_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
], AddPTDetailsComponent);



/***/ }),

/***/ "6zJ6":
/*!***********************************************************************!*\
  !*** ./src/app/add-membership-plan/add-membership-plan.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1tZW1iZXJzaGlwLXBsYW4vYWRkLW1lbWJlcnNoaXAtcGxhbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "7gTp":
/*!*****************************************************************!*\
  !*** ./src/app/add-gym-branches/add-gym-branches.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1neW0tYnJhbmNoZXMvYWRkLWd5bS1icmFuY2hlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "8/Uk":
/*!************************************************!*\
  !*** ./src/app/payments/payments.component.ts ***!
  \************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payments_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payments.component.html */ "re+X");
/* harmony import */ var _payments_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payments.component.css */ "5eXO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
let PaymentsComponent = class PaymentsComponent {
    constructor(gymServices, _router, route) {
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.columnDefs = [
            {
                headerName: 'Id',
                field: 'MbrId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
            },
            {
                headerName: 'Name',
                field: 'MbrName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Designaion',
                field: 'MbrType',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Plan',
                field: 'MbrShipName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Amount',
                field: 'MbrShipAmt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Paid Amt',
                field: 'PaidAmt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Paid Dt',
                field: 'PaidDt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Member Ship',
                field: 'MembershipType',
                filter: 'agTextColumnFilter'
            },
        ];
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
    }
    onGridReady(params) {
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetPaymentDetails().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                dataValue = result;
                params.api.setRowData(dataValue);
            }
            else {
                dataValue = "";
                params.api.setRowData(dataValue);
            }
        }, error => alert(error.message));
    }
};
PaymentsComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
PaymentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payments',
        template: _raw_loader_payments_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payments_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], PaymentsComponent);



/***/ }),

/***/ "8MQA":
/*!*****************************************************************!*\
  !*** ./src/app/renewal-payments/renewal-payments.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbmV3YWwtcGF5bWVudHMvcmVuZXdhbC1wYXltZW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "8QMi":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-remaining-balance/add-remaining-balance.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Remaining Balance</h4>\r\n\r\n        <form [formGroup]=\"AddRemBalForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrId\" formControlName=\"MbrId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrShipId\" formControlName=\"MbrShipId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MembershipType\" formControlName=\"MembershipType\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrshipStartDt\" formControlName=\"MbrshipStartDt\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrshipEndDt\" formControlName=\"MbrshipEndDt\" style=\"display:none\">\r\n            </div>\r\n             \r\n            <div>\r\n                <hr /> \r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Member Name</label> \r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrName\" formControlName=\"MbrName\" disabled>\r\n                            \r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Remaining Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"RemBalance\" formControlName=\"RemBalance\" disabled>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Paid Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"PaidAmt\" [(ngModel)]=\"PaidAmt\"> <!--(keypress)=\"BalanceAmount($event)\"-->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Balance Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"BalRemaining\" [(ngModel)]=\"BalRemaining\" >\r\n                    </div>\r\n                      \r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"PaidDt\" formControlName=\"PaidDt\">\r\n\r\n                    </div>\r\n                     \r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid By</label>\r\n                        <select class=\"form-control\" formControlName=\"PaidBy\" [(ngModel)]=\"PaidByddl\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                            <option value=\"Cash\">Cash</option>\r\n                            <option value=\"Card\">Card</option>\r\n                            <option value=\"Gpay\">Gpay</option>\r\n                            <option value=\"PhonePay\">PhonePay</option>\r\n\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Description</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"Discription\" [(ngModel)]=\"Discription\"> \r\n                    </div> \r\n                </div>\r\n            </div>\r\n\r\n        \r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"Submit\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "8sRu":
/*!*********************************************************************!*\
  !*** ./src/app/renewal-membership/renewal-membership.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbmV3YWwtbWVtYmVyc2hpcC9yZW5ld2FsLW1lbWJlcnNoaXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "9HQw":
/*!********************************************************!*\
  !*** ./src/app/add-employee/add-employee.component.ts ***!
  \********************************************************/
/*! exports provided: AddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function() { return AddEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_employee_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-employee.component.html */ "g7Hf");
/* harmony import */ var _add_employee_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-employee.component.css */ "NaPp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









//import { debug } from 'console';
let AddEmployeeComponent = class AddEmployeeComponent {
    constructor(gymServices, formBuilder, _router, route, datepipe) {
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.route = route;
        this.datepipe = datepipe;
        this._MbrPlans = [];
        this._Members = [];
        this._PTMembers = [];
        this._PTTrainer = [];
        this.submitted = false;
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
        //debugger; 
        this.btnVal = 'Save';
        this.modelheaderval = 'Add Member';
        this.AddEmpForm = this.formBuilder.group({
            MbrType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrId: [''],
            sal_Id: [''],
            MbrName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrMob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]],
            MbrMob2: [''],
            MbrDOB: [''],
            MbrGender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrDOE: [''],
            MbrEmail: [''],
            MbrAddr: [''],
            MbrCity: [''],
            MbrState: [''],
            MbrPincode: [''],
            MbrSalary: [''],
            SalDesc: [''],
            GeneralDesc: [''],
            MbrCertification: [''],
            MbrCertificationDt: [''],
            EmpName: [''],
            RemBalance: [''],
            MbrPlans: [''],
            MbrshipAmt: [''],
            MbrshipPaidAmt: [''],
            MbrshipDays: [''],
            MbrshipStartDt: [''],
            MbrshipEndDt: [''],
            MbrshipDesc: [''],
            MbrPaidBy: [''],
            PaidDt: [''],
            MbrShipId: [''],
            MbrUserId: [''],
            MbrPTCharges: [''],
            MbrBatch: [''],
            MbrPTPlanId: [''],
            MbrPtDays: [''],
            MbrPtTrainerId: [''],
            MbrPTChargesofTrainer: [''],
            MbrPTAmt: [''],
            MbrPTAmtPaidBy: [''],
            MbrPTStartDt: [''],
            MbrPTEndDt: [''],
            MbrPTDesc: [''],
            PtMemberId: [''],
        });
        this.route.queryParams.subscribe((params) => {
            if (params != null && params.MbrName != undefined) {
                this.MbrId = params.MbrId;
                this.sal_Id = params.sal_Id;
                this.MbrShipId = params.MbrShipId;
                this.MbrUserId = params.MbrUserId;
                this.MbrName = params.MbrName;
                this.MbrTypeddl = params.MbrType;
                this.MbrMob = params.MbrMob;
                this.MbrMob2 = params.MbrMob2;
                this.MbrDOB = params.MbrDOB;
                this.MbrGender = params.MbrGender;
                this.MbrDOE = params.MbrDOE;
                this.MbrEmail = params.MbrEmail;
                this.MbrAddr = params.MbrAddr;
                this.MbrCityddl = params.MbrCity;
                this.MbrStateddl = params.MbrState;
                this.MbrPincode = params.MbrPincode;
                this.MbrSalary = params.MbrSalary;
                this.SalDesc = params.SalDesc;
                this.GeneralDesc = params.GeneralDesc;
                this.MbrCertification = params.MbrCertification;
                this.MbrCertificationDt = params.MbrCertificationDt;
                this.EmpName = params.EmpName;
                this.RemBalance = params.RemBalance;
                this.MbrPlansddl = params.MbrShipId;
                this.MbrshipAmt = params.MbrShipAmt;
                this.MbrshipPaidAmt = params.PaidAmt;
                this.MbrshipDays = params.MbrShipDurationInDays;
                this.MbrshipStartDt = params.MbrshipStartDt;
                this.MbrshipEndDt = params.MbrshipEndDt;
                this.MbrshipDesc = params.Description;
                this.MbrPaidByddl = params.PaidBy;
                this.MbrPTCharges = params.MbrPTCharges;
                this.MbrBatch = params.MbrBatch;
                this.MbrPTPlanId = params.MbrPTPlanId;
                this.MbrPtDays = params.MbrPtDays;
                this.MbrPtTrainerId = params.MbrPtTrainerId;
                this.MbrPTChargesofTrainer = params.MbrPTChargesofTrainer;
                this.MbrPTAmt = params.MbrPTAmt;
                this.MbrPTAmtPaidBy = params.MbrPTAmtPaidBy;
                this.MbrPTStartDt = params.MbrPTStartDt;
                this.MbrPTEndDt = params.MbrPTEndDt;
                this.MbrPTDesc = params.MbrPTDesc;
                this.PtMemberId = params.PtMemberId;
                this.btnVal = 'update';
                this.modelheaderval = 'Update Member';
            }
        });
        this.GetAllMemberShipPlan();
        this.GetAllMembers();
    }
    get fval() {
        return this.AddEmpForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (!this.AddEmpForm.invalid) {
            if (this.btnVal == "Save") {
                this.gymServices.AddMembers(this.AddEmpForm.value).subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                        alert(result);
                        return this._router.navigate(["/Employee"]);
                    }
                }, error => alert(error.message));
            }
            else { // Update 
                this.gymServices.UpdateMember(this.AddEmpForm.value).subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                        alert(result);
                        return this._router.navigate(["/Employee"]);
                    }
                }, error => alert(error.message));
            }
        }
    }
    onCancel() {
        return this._router.navigate(["/Employee"]);
    }
    GetAllMemberShipPlan() {
        this.gymServices.GetAllMemberShipPlan().subscribe(res => {
            this._MbrPlans = res;
            // data contains actual array of users
        }, error => alert(error.message));
    }
    GetAllMembers() {
        debugger;
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                this._Members = result;
                this._PTMembers = result.filter(x => x.MbrType == "GymMember");
                this._PTTrainer = result.filter(x => x.MbrType == "FloorManager" || x.MbrType == "Trainer");
            }
        }, error => alert(error.message));
    }
    filterForeCasts(value) {
        this.MbrTypeddl = value;
    }
    showMemberShipPlan(value) {
        this.MbrshipAmt = this._MbrPlans.find(x => x.MbrShipId == value).MbrShipAmt.toString();
        this.MbrshipDays = this._MbrPlans.find(x => x.MbrShipId == value).MbrShipDurationInDays.toString();
    }
    showPersonalTrainingPlans(value) {
        this.MbrPtDays = this._MbrPlans.find(x => x.MbrShipId == value).MbrShipDurationInDays.toString();
    }
    onDateChange(value) {
        this.date = new Date(value.srcElement.value);
        this.date.setDate(this.date.getDate() + +this.MbrshipDays);
        this.MbrshipEndDt = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    }
    onDOBSelect(value) {
        this.date = new Date(value.srcElement.value);
        let timeDiff = Math.abs(Date.now() - this.date.getTime());
        let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
        if (age < 18) {
            alert('Age must be greater than 18');
            this.MbrDOB = '';
        }
    }
    showPTTrainerCharges(value) {
        this.MbrPTChargesofTrainer = this._PTTrainer.find(x => x.MbrId == value).MbrPTCharges;
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
        }
        return true;
    }
};
AddEmployeeComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }
];
AddEmployeeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-employee',
        template: _raw_loader_add_employee_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_employee_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
], AddEmployeeComponent);



/***/ }),

/***/ "9Rxj":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/renewal-payments/renewal-payments.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Renewal Payment</h4>\r\n        <hr />\r\n        <form [formGroup]=\"RenewalPaymentForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrId\" formControlName=\"MbrId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MembershipType\" formControlName=\"MembershipType\" style=\"display:none\">\r\n                \r\n            </div>\r\n            <div class=\"form-row\">\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Member Name </label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrName\" formControlName=\"MbrName\" disabled>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Batch</label>\r\n                    <select class=\"form-control\" formControlName=\"MbrBatch\" [(ngModel)]=\"MbrBatch\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option value=\"Morning\">Morning</option>\r\n                        <option value=\"Afternoon\">Afternoon</option>\r\n                        <option value=\"Evening\">Evening</option>\r\n\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Plan Name</label>\r\n\r\n                    <select formControlName=\"MbrShipId\" [(ngModel)]=\"MbrShipId\" class=\"form-control\" (change)=\"showMemberShipPlan($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrShipId.errors }\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option *ngFor=\"let plan of _MbrPlans\" value={{plan.MbrShipId}}>\r\n                            {{plan.MbrShipName}} -({{plan.MbrShipDurationInDays}})\r\n                        </option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && fval.MbrShipId.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.MbrShipId.errors.required\">\r\n                            Plan is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Charges </label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrShipCharges\" formControlName=\"MbrShipCharges\" disabled>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Days </label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Days\" formControlName=\"Days\" disabled>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Paid Amount </label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"PaidAmt\" formControlName=\"PaidAmt\" [ngClass]=\"{ 'is-invalid': submitted && fval.PaidAmt.errors }\">\r\n                    <div *ngIf=\"submitted && fval.PaidAmt.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.PaidAmt.errors.required\">\r\n                            Paid Amount is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Paid By</label>\r\n                    <select class=\"form-control\" formControlName=\"PaidBy\" [(ngModel)]=\"PaidBy\" [ngClass]=\"{ 'is-invalid': submitted && fval.PaidBy.errors }\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option value=\"Cash\">Cash</option>\r\n                        <option value=\"Card\">Card</option>\r\n                        <option value=\"Gpay\">Gpay</option>\r\n                        <option value=\"PhonePay\">PhonePay</option>\r\n                    </select>\r\n\r\n                    <div *ngIf=\"submitted && fval.PaidBy.errors\" class=\"invalid-feedback\" >\r\n                        <div *ngIf=\"fval.PaidBy.errors.required\">\r\n                            Paid By is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Paid Date </label>\r\n                    <input type=\"date\" class=\"form-control\" [(ngModel)]=\"PaidDt\" formControlName=\"PaidDt\" [ngClass]=\"{ 'is-invalid': submitted && fval.PaidDt.errors }\">\r\n                    <div *ngIf=\"submitted && fval.PaidDt.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.PaidDt.errors.required\">\r\n                            Paid Date is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Start Date </label>\r\n                    <input type=\"date\" class=\"form-control\" [(ngModel)]=\"MbrshipStartDt\" formControlName=\"MbrshipStartDt\" (change)=\"onDateChange($event)\" >\r\n                </div> \r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                  \r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Expire Date</label>\r\n                    <input type=\"date\" class=\"form-control\" [(ngModel)]=\"MbrshipEndDt\" formControlName=\"MbrshipEndDt\">\r\n                </div>\r\n            </div>\r\n\r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"Renewed\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "RV7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let HomeComponent = class HomeComponent {
    constructor(gymServices, _router, route) {
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.GymMember = 0;
        this.Trainer = 0;
        this.PT = 0;
        this.Enquiry = 0;
        this.MbrShipExpiring = 0;
        this.saleData = [];
        this.columnDefs = [
            {
                headerName: 'Id',
                field: 'MbrId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Name',
                field: 'MbrName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Enquiry for',
                field: 'EnquiryFor',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Expected date to join ',
                field: 'ExpectedDtToJoin',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Enquiry Date',
                field: 'enquiryDate',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Last follow up',
                field: 'enquiryDate',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
        ];
        this.columnDefs1 = [
            {
                headerName: 'MbrId',
                field: 'Id',
                Filter: true,
                enableSorting: true,
                hide: true,
            },
            {
                headerName: 'Name',
                field: 'MbrName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Designaion',
                field: 'MbrType',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Mobile No',
                field: 'MbrMob',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'BIRTHDAY',
                field: 'BIRTHDAY',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'AGE',
                field: 'AGE_NOW',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
        ];
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
    }
    onGridReady(params) {
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetDashboardData().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                debugger;
                if (result.countModel != null) {
                    this.GymMember = result.countModel.filter(x => x.MbrType == "GymMember")[0].count; //(result.countModel['GymMember'] == undefined || result.countModel['GymMember'] == null) ? 0 : result.countModel['GymMember'].count;
                    this.Trainer = result.countModel.filter(x => x.MbrType == "Trainer")[0].count;
                    this.PT = result.countModel.filter(x => x.MbrType == "PT")[0].count;
                    this.Enquiry = result.countModel.filter(x => x.MbrType == "Enquiry")[0].count;
                    this.MbrShipExpiring = result.countModel.filter(x => x.MbrType == "MbrShipExpiring")[0].count;
                    this.Events = '0';
                }
                dataValue = result.enquiryModel;
                params.api.setRowData(dataValue);
                if (result.salesModel) {
                    for (let n = 0; n < result.salesModel.length; ++n) {
                        this.saleData.push({ "name": result.salesModel[n].Months, "value": Number(result.salesModel[n].Amt) });
                    }
                }
                // ngs chart does not detect the data change sp we add below line
                this.saleData = [...this.saleData];
            }
            else {
                dataValue = "";
                params.api.setRowData(dataValue);
            }
        }, error => alert(error.message));
    }
    onGridReady1(params) {
        params.api.sizeColumnsToFit();
        this.gridApi1 = params.api;
        this.gridColumnApi1 = params.columnApi;
        this.gymServices.GetUpcomingBirthdays().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                params.api.setRowData(result);
            }
        }, error => alert(error.message));
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], HomeComponent);



/***/ }),

/***/ "9yJv":
/*!********************************************************!*\
  !*** ./src/app/add-expenses/add-expenses.component.ts ***!
  \********************************************************/
/*! exports provided: AddExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExpensesComponent", function() { return AddExpensesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_expenses_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-expenses.component.html */ "OnQv");
/* harmony import */ var _add_expenses_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-expenses.component.css */ "0cTf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let AddExpensesComponent = class AddExpensesComponent {
    constructor(gymServices, formBuilder, _router, route) {
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
        this.btnVal = 'Save';
        this.modelheaderval = 'Add Expense';
        this.AddExpensesForm = this.formBuilder.group({
            ExpensesId: [''],
            ExpenseDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Description: [''],
        });
        this.route.queryParams.subscribe((params) => {
            debugger;
            if (params != null && params.ExpensesId != undefined) {
                this.ExpensesId = params.ExpensesId;
                this.ExpenseDate = params.ExpenseDate;
                this.Category = params.Category;
                this.SubCategory = params.SubCategory;
                this.Amount = params.Amount;
                this.Description = params.Description;
                this.btnVal = 'update';
                this.modelheaderval = 'Update Expenses';
            }
        });
    }
    onSubmit() {
        this.submitted = true;
        if (!this.AddExpensesForm.invalid) {
            if (this.btnVal == "Save") {
                this.gymServices.CreateExpense(this.AddExpensesForm.value).subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                        alert(result);
                        return this._router.navigate(["/GymExpenses"]);
                    }
                    else {
                        alert("Error.");
                    }
                }, error => alert(error.message));
            }
            else { // Update 
                this.gymServices.UpdateExpense(this.AddExpensesForm.value).subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                        alert(result);
                        return this._router.navigate(["/GymExpenses"]);
                    }
                    else {
                        alert("Error.");
                    }
                }, error => alert(error.message));
            }
        }
    }
    onCancel() {
        return this._router.navigate(["/GymExpenses"]);
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
        }
        return true;
    }
    get fval() {
        return this.AddExpensesForm.controls;
    }
};
AddExpensesComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
AddExpensesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-expenses',
        template: _raw_loader_add_expenses_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_expenses_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], AddExpensesComponent);



/***/ }),

/***/ "AK+C":
/*!********************************************************!*\
  !*** ./src/app/gym-expenses/gym-expenses.component.ts ***!
  \********************************************************/
/*! exports provided: GymExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymExpensesComponent", function() { return GymExpensesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_gym_expenses_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./gym-expenses.component.html */ "JDQ0");
/* harmony import */ var _gym_expenses_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gym-expenses.component.css */ "XjGh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../btn-cell-renderer/btn-cell-renderer.component */ "5oOU");








//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
let GymExpensesComponent = class GymExpensesComponent {
    constructor(gymServices, _router, route) {
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.frameworkComponents = {
            buttonRenderer: _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_7__["BtnCellRendererComponent"],
        };
        this.columnDefs = [
            {
                headerName: 'Id',
                field: 'ExpensesId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
            },
            {
                headerName: 'Date',
                field: 'ExpenseDate',
                Filter: true,
                enableSorting: true,
                sortable: true,
                cellRenderer: (params) => {
                    const date = new Date(params.value);
                    const formattedDate = date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
                    return formattedDate;
                },
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Category',
                field: 'Category',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Amount',
                field: 'Amount',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Description',
                field: 'Description',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Action',
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onBtnClick.bind(this),
                    OnDelete: this.OnDeleteMember.bind(this),
                },
                filter: 'agTextColumnFilter'
            },
        ];
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
    }
    AddExpense() {
        return this._router.navigate(["/AddExpenses"]);
    }
    onBtnClick(e) {
        return this._router.navigate(["/AddExpenses"], { queryParams: e.rowData });
    }
    onGridReady(params) {
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetAllExpense().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                dataValue = result;
                params.api.setRowData(dataValue);
            }
            else {
                this.rowData = null;
            }
        }, error => alert(error.message));
    }
    OnDeleteMember(params) {
        alert(params.ExpensesId);
        this.gymServices.DeleteExpense(params.ExpensesId).subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                alert('Deleted Successfully !');
                return this._router.navigate(["/GymExpenses"]);
            }
            else {
                alert("Error !");
            }
        }, error => alert(error.message));
    }
};
GymExpensesComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
GymExpensesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-gym-expenses',
        template: _raw_loader_gym_expenses_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gym_expenses_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], GymExpensesComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, baseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
//export const baseUrl = "https://localhost:44314/";
//export const sgMailAPIKey = "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";
const baseUrl = "http://192.168.0.159:81/";
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bf02":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/membership-history/membership-history.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n\r\n        <h3>Members Hisory</h3>\r\n        <form [formGroup]=\"MbrHistoryForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Select Member</label>\r\n                    <select formControlName=\"PtMemberId\" [(ngModel)]=\"PtMemberId\" class=\"form-control\" (change)=\"showPersonalTrainingPlans($event.target.value)\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                        <option *ngFor=\"let mbr of _Members\" value={{mbr.MbrId}}>\r\n                            {{mbr.MbrName}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n            <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                             class=\"ag-theme-alpine\"\r\n                             [columnDefs]=\"columnDefs\"\r\n                             (gridReady)=\"onGridReady($event)\"\r\n                             [frameworkComponents]=\"frameworkComponents\"\r\n                             [animateRows]=\"true\"\r\n                             pagination=\"true\"\r\n                             [rowData]=\"rowData\"\r\n                             paginationPageSize=\"20\">\r\n            </ag-grid-angular>\r\n        </form>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "CKO6":
/*!****************************************************************!*\
  !*** ./src/app/trainers-history/trainers-history.component.ts ***!
  \****************************************************************/
/*! exports provided: TrainersHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainersHistoryComponent", function() { return TrainersHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_trainers_history_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./trainers-history.component.html */ "ebd2");
/* harmony import */ var _trainers_history_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainers-history.component.css */ "4cTV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TrainersHistoryComponent = class TrainersHistoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
TrainersHistoryComponent.ctorParameters = () => [];
TrainersHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-trainers-history',
        template: _raw_loader_trainers_history_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_trainers_history_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TrainersHistoryComponent);



/***/ }),

/***/ "GVV7":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loginFormDesign d-flex align-items-center justify-content-center \">\r\n    <div class=\"wrapper fadeInDown m-0\">\r\n        <div class=\"card m-0\">\r\n            <form [formGroup]=\"ForgotPasswordform\" (ngSubmit)=\"onSubmit()\" action=\"#\" class=\"d-flex flex-column\">\r\n                <div class=\"h3 text-center text-white\">Forgot Password</div>\r\n                <div class=\"d-flex align-items-center input-field my-3 mb-4\">\r\n                    <span class=\"far fa-user p-2\"></span>\r\n                    <input type=\"text\" formControlName=\"EmailAdr\" placeholder=\"Email Address\" required class=\"form-control\" >\r\n                </div>\r\n                 \r\n                <div> <input type=\"submit\" value=\"Login\" class=\"btn btn-primary\"> </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n        <!-- Main content -->\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <!-- Small boxes (Stat box) -->\r\n                <div class=\"row text-center\">\r\n                    <div class=\"col-lg-4 col-6\">\r\n                        <!-- small box -->\r\n                        <div class=\"small-box bg-info\">\r\n                            <div class=\"inner topPadding\">\r\n                                <h3>Gym Members</h3>\r\n\r\n                                <p style=\"font-size:20px;\">{{GymMember}}</p>\r\n                            </div>\r\n                            <div class=\"icon\">\r\n                                <i class=\"ion ion-bag\"></i>\r\n                            </div>\r\n                            <a href=\"#\" [routerLink]=\"['/Employee']\" class=\"small-box-footer text-light\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- ./col -->\r\n                    <div class=\"col-lg-4 col-6\">\r\n                        <!-- small box -->\r\n                        <div class=\"small-box bg-success\">\r\n                            <div class=\"inner topPadding\">\r\n                                <h3>Trainer's</h3>\r\n                                <p style=\"font-size:20px;\"> {{Trainer}}</p>\r\n                            </div>\r\n                            <div class=\"icon\">\r\n                                <i class=\"ion ion-stats-bars\"></i>\r\n                            </div>\r\n                            <a href=\"#\" [routerLink]=\"['/Employee']\" class=\"small-box-footer text-light\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- ./col -->\r\n                    <div class=\"col-lg-4 col-6\">\r\n                        <!-- small box -->\r\n                        <div class=\"small-box bg-warning\">\r\n                            <div class=\"inner topPadding\">\r\n                                <h3>Profetinal Trainers</h3>\r\n                                <p style=\"font-size:20px;\">{{ PT }}</p>\r\n                            </div>\r\n                            <div class=\"icon\">\r\n                                <i class=\"ion ion-person-add\"></i>\r\n                            </div>\r\n                            <a href=\"#\" [routerLink]=\"['/Employee']\" class=\"small-box-footer text-light\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- ./col -->\r\n                </div>\r\n                <!-- /.row -->\r\n                <!-- Small boxes (Stat box) -->\r\n                <div class=\"row text-center\" style=\"margin-top:5px\">\r\n                    <div class=\"col-lg-4 col-6\">\r\n                        <!-- small box -->\r\n                        <div class=\"small-box bg-danger\">\r\n                            <div class=\"inner topPadding\">\r\n                                <h3>Month Enqiries</h3>\r\n                                <p style=\"font-size:20px;\">{{Enquiry}}</p>\r\n                            </div>\r\n                            <div class=\"icon\">\r\n                                <i class=\"ion ion-bag\"></i>\r\n                            </div>\r\n                            <a href=\"#\" [routerLink]=\"['/Employee']\" class=\"small-box-footer text-light\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- ./col -->\r\n                    <div class=\"col-lg-4 col-6\">\r\n                        <!-- small box -->\r\n                        <div class=\"small-box bg-primary\">\r\n                            <div class=\"inner topPadding\">\r\n                                <h3>Membership expiring </h3>\r\n                                <p style=\"font-size:20px;\"> {{ MbrShipExpiring }}</p>\r\n                            </div>\r\n                            <div class=\"icon\">\r\n                                <i class=\"ion ion-stats-bars\"></i>\r\n                            </div>\r\n                            <a href=\"#\" [routerLink]=\"['/Employee']\" class=\"small-box-footer text-light\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- ./col -->\r\n                    <div class=\"col-lg-4 col-6\">\r\n                        <!-- small box -->\r\n                        <div class=\"small-box bg-secondary\">\r\n                            <div class=\"inner topPadding\">\r\n                                <h3>Event</h3>\r\n                                <p style=\"font-size:20px;\">{{ Events }}</p>\r\n                            </div>\r\n                            <div class=\"icon\">\r\n                                <i class=\"ion ion-person-add\"></i>\r\n                            </div>\r\n                            <a href=\"#\" [routerLink]=\"['/Employee']\" class=\"small-box-footer text-light\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- ./col -->\r\n                </div>\r\n                <!-- /.row -->\r\n                <!-- Main row -->\r\n                <div class=\"row\">\r\n                    <!-- Left col -->\r\n                    <section class=\"col-lg-12 connectedSortable\">\r\n                        <!-- Custom tabs (Charts with tabs)-->\r\n                        <div class=\"card\" style=\"max-width:100% !important;margin:10px 0 0 0 !important;padding:0px !important\">\r\n                            <div class=\"card-header\">\r\n                                <h3 class=\"card-title\">\r\n                                    <i class=\"fas fa-chart-pie mr-1\"></i>\r\n                                    Sales\r\n                                </h3>\r\n                            </div><!-- /.card-header -->\r\n                            <div class=\"card-body\">\r\n                                <div class=\"tab-content p-0\">\r\n                                    <ngx-charts-bar-vertical [view]=\"[1000,400]\"\r\n                                                             [results]=\"saleData\"\r\n                                                             [xAxisLabel]=\"'Months'\"\r\n                                                             [legendTitle]=\"'Sale Chart'\"\r\n                                                             [yAxisLabel]=\"'Sales'\"\r\n                                                             [legend]=\"true\"\r\n                                                             [showXAxisLabel]=\"true\"\r\n                                                             [showYAxisLabel]=\"true\"\r\n                                                             [xAxis]=\"true\"\r\n                                                             [yAxis]=\"true\"\r\n                                                             [gradient]=\"true\">\r\n                                    </ngx-charts-bar-vertical>\r\n                                </div>\r\n                            </div><!-- /.card-body -->\r\n                        </div>\r\n                        <!-- /.card -->\r\n                    </section>\r\n                    <!-- /.Left col -->\r\n                </div>\r\n                <!-- /.row (main row) -->\r\n                <div class=\"row\">\r\n                    <section class=\"col-lg-12 connectedSortable\">\r\n                        <div>\r\n                            <div class=\"card-header\">\r\n                                <h3 class=\"card-title\">\r\n                                    <i class=\"fas fa-chart-pie mr-1\"></i>\r\n                                    New Member's Enqiry\r\n                                </h3>\r\n                            </div>\r\n                            <ag-grid-angular style=\"width: 100%; height: 300px;\"\r\n                                             class=\"ag-theme-alpine\"\r\n                                             [columnDefs]=\"columnDefs\"\r\n                                             (gridReady)=\"onGridReady($event)\"\r\n                                             [animateRows]=\"true\"\r\n                                             pagination=\"true\"\r\n                                             paginationPageSize=\"20\">\r\n                            </ag-grid-angular>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <section class=\"col-lg-12 connectedSortable\">\r\n                        <div>\r\n                            <div class=\"card-header\">\r\n                                <h3 class=\"card-title\">\r\n                                    <i class=\"fas fa-chart-pie mr-1\"></i>\r\n                                   Upcoming Birthdays\r\n                                </h3>\r\n                            </div>\r\n                            <ag-grid-angular style=\"width: 100%; height: 300px;\"\r\n                                             class=\"ag-theme-alpine\"\r\n                                             [columnDefs]=\"columnDefs1\"\r\n                                             (gridReady)=\"onGridReady1($event)\"\r\n                                             [animateRows]=\"true\"\r\n                                             pagination=\"true\"\r\n                                             paginationPageSize=\"20\">\r\n                            </ag-grid-angular>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n            </div><!-- /.container-fluid -->\r\n        </section>\r\n        <!-- /.content -->\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "Gs9t":
/*!********************************************************************!*\
  !*** ./src/app/membership-history/membership-history.component.ts ***!
  \********************************************************************/
/*! exports provided: MembershipHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipHistoryComponent", function() { return MembershipHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_membership_history_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./membership-history.component.html */ "Bf02");
/* harmony import */ var _membership_history_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./membership-history.component.css */ "+cV6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../btn-cell-renderer/btn-cell-renderer.component */ "5oOU");









let MembershipHistoryComponent = class MembershipHistoryComponent {
    constructor(gymServices, _router, route, formBuilder) {
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.formBuilder = formBuilder;
        this._Members = [];
        this.frameworkComponents = {
            buttonRenderer: _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_8__["BtnCellRendererComponent"],
        };
        this.columnDefs = [
            {
                headerName: 'Id',
                field: 'MbrId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Name',
                field: 'MbrName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Batch',
                field: 'MbrBatch',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Membership Name',
                field: 'MbrShipName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Membership Amt',
                field: 'MbrShipAmt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Paid Amt',
                field: 'PaidAmt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Paid By',
                field: 'PaidBy',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Paid Dt',
                field: 'PaidDt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Start Dt',
                field: 'MbrshipStartDt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'End Dt',
                field: 'MbrshipEndDt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Type',
                field: 'MembershipType',
                filter: 'agTextColumnFilter'
            },
        ];
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
        this.MbrHistoryForm = this.formBuilder.group({
            PtMemberId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]],
        });
        this.GetAllMembers();
    }
    onGridReady(params) {
        this.rowData = '';
    }
    GetAllMembers() {
        debugger;
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                this._Members = result;
            }
        }, error => alert(error.message));
    }
    showPersonalTrainingPlans(value) {
        let MemberId = value;
        this.gymServices.GetGymMemberHistoryById(MemberId).subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                this.rowData = result;
            }
            else {
                this.rowData = null;
            }
        }, error => alert(error.message));
    }
};
MembershipHistoryComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
MembershipHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-membership-history',
        template: _raw_loader_membership_history_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_membership_history_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], MembershipHistoryComponent);



/***/ }),

/***/ "H6fx":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fetch_data_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fetch-data.component.html */ "WkqT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        http.get(baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-fetch-data',
        template: _raw_loader_fetch_data_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], String])
], FetchDataComponent);



/***/ }),

/***/ "HNxn":
/*!**************************************************************************!*\
  !*** ./src/app/add-remaining-balance/add-remaining-balance.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddRemainingBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRemainingBalanceComponent", function() { return AddRemainingBalanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_remaining_balance_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-remaining-balance.component.html */ "8QMi");
/* harmony import */ var _add_remaining_balance_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-remaining-balance.component.css */ "fkBw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let AddRemainingBalanceComponent = class AddRemainingBalanceComponent {
    constructor(gymServices, formBuilder, _router, route) {
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.route = route;
        this._PTMembers = [];
        this._PTTrainer = [];
        this._MbrPlans = [];
        this.submitted = false;
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
        this.AddRemBalForm = this.formBuilder.group({
            MbrId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrShipId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            RemBalance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MembershipType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PaidDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PaidBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PaidAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            BalRemaining: [''],
            Discription: [''],
            MbrshipStartDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrshipEndDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.route.queryParams.subscribe((params) => {
            if (params != null && params.MbrName != undefined) {
                this.MbrId = params.MbrId;
                this.MbrName = params.MbrName;
                this.MbrShipId = params.MbrShipId;
                this.RemBalance = params.RemBalance;
                this.MembershipType = params.MembershipType;
                this.MbrshipStartDt = params.MbrshipStartDt;
                this.MbrshipEndDt = params.MbrshipEndDt;
            }
        });
        this.GetAllMemberShipPlan();
    }
    get fval() {
        return this.AddRemBalForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        debugger;
        if (!this.AddRemBalForm.invalid) {
            // adding new remaining balance to existing 
            this.AddRemBalForm.value.RemBalance = this.BalRemaining;
            this.gymServices.AddPTMembers(this.AddRemBalForm.value).subscribe(result => {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                    alert(result);
                    return this._router.navigate(["/RemainingBalance"]);
                }
            }, error => alert(error.message));
        }
    }
    onCancel() {
        return this._router.navigate(["/RemainingBalance"]);
    }
    GetAllMemberShipPlan() {
        this.gymServices.GetAllMemberShipPlan().subscribe(res => {
            this._MbrPlans = res;
        }, error => alert(error.message));
    }
};
AddRemainingBalanceComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
AddRemainingBalanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-remaining-balance',
        template: _raw_loader_add_remaining_balance_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_remaining_balance_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], AddRemainingBalanceComponent);



/***/ }),

/***/ "HuEp":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-membership-plan/add-membership-plan.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{modelheaderval}}</h4>\r\n        <hr />\r\n\r\n        <form [formGroup]=\"AddPlanForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n            <div style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrShipId\" formControlName=\"MbrShipId\" style=\"display:none\"> \r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label for=\"name\">Plan Name</label>\r\n                    <input type=\"text\" [(ngModel)]=\"MbrShipName\" class=\"form-control\" formControlName=\"MbrShipName\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrShipName.errors }\">\r\n                    <div *ngIf=\"submitted && fval.MbrShipName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.MbrShipName.errors.required\">\r\n                            Plan Name is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Amount </label>\r\n                    <input type=\"text\" [(ngModel)]=\"MbrShipAmt\" class=\"form-control\" formControlName=\"MbrShipAmt\" (keypress)=\"numberOnly($event)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrShipAmt.errors }\">\r\n                    <div *ngIf=\"submitted && fval.MbrShipAmt.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.MbrShipAmt.errors.required\">\r\n                            Please enter amount.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Duration (Days) </label>\r\n                    <input type=\"text\" [(ngModel)]=\"MbrShipDurationInDays\" class=\"form-control\" formControlName=\"MbrShipDurationInDays\" (keypress)=\"numberOnly($event)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrShipDurationInDays.errors }\">\r\n                    <div *ngIf=\"submitted && fval.MbrShipDurationInDays.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.MbrShipDurationInDays.errors.required\">\r\n                            Enter Plan Duration.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label for=\"name\">Start Date</label>\r\n                    <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"StartDt\" formControlName=\"StartDt\">\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> End Date</label>\r\n                    <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"EndDt\" formControlName=\"EndDt\">\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Description </label>\r\n                    <input type=\"text\" [(ngModel)]=\"Description\" class=\"form-control\" formControlName=\"Description\" >\r\n                </div>\r\n            </div>\r\n              \r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"{{btnVal}}\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "IKYZ":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gym-profile/gym-profile.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile</h4>\r\n        <hr />\r\n        <form [formGroup]=\"GymProfileForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n            <div style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"GymProfileId\" formControlName=\"GymProfileId\" style=\"display:none\">\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Gym Name</label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"GymName\" formControlName=\"GymName\" [ngClass]=\"{ 'is-invalid': submitted && fval.GymName.errors }\">\r\n                    <div *ngIf=\"submitted && fval.GymName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.GymName.errors.required\">\r\n                            Gym Name is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>First Name</label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"FName\" formControlName=\"FName\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Last Name </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"LName\" formControlName=\"LName\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Mobile No</label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MobileNumber\" formControlName=\"MobileNumber\" maxlength=\"10\" (keypress)=\"numberOnly($event)\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Address</label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Address\" formControlName=\"Address\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Email Id</label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"EMailId\" formControlName=\"EMailId\">\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> MemberShip Plan </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrShipName\" formControlName=\"MbrShipName\" disabled>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Amount Paid </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"PaidAmt\" formControlName=\"PaidAmt\" disabled>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Start Date</label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrshipStartDt\" formControlName=\"MbrshipStartDt\" disabled>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Expired </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrshipEndDt\" formControlName=\"MbrshipEndDt\" disabled>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> MemberShip Status </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mbrShipStatus\" formControlName=\"mbrShipStatus\" disabled>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> GST No </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"GSTNo\" formControlName=\"GSTNo\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Website </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Website\" formControlName=\"Website\">\r\n                </div>\r\n            </div>\r\n\r\n            <input type=\"button\" class=\"fadeIn fourth\" value=\"Update Profile\" (click)=\"onSubmit($event)\">\r\n\r\n            <div class=\"form-row \">\r\n                <h5 class=\"mb-2\">Admin Profile</h5>\r\n            </div>\r\n            <hr />\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <input type=\"button\" class=\"fadeIn fourth\" [value]=\"btnValue\"  (click)=\"onSubmit($event)\"><!--Activate Admin Profile-->\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-row\"  *ngIf=\"isShown\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Enter OTP </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"OTPValue\" formControlName=\"OTPValue\" maxlength=\"6\" (keypress)=\"VerifyOTP($event)\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-row \">\r\n                <h5 class=\"mb-2\">Change Password</h5>\r\n            </div>\r\n            <hr />\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Old Password</label>\r\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"OldPassword\" formControlName=\"OldPassword\" [ngClass]=\"{ 'is-invalid': submitted && fval.OldPassword.errors }\">\r\n                    <div *ngIf=\"submitted && fval.OldPassword.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.OldPassword.errors.required\">\r\n                            Old password is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>New Password</label>\r\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"NewPassword\" formControlName=\"NewPassword\" [ngClass]=\"{ 'is-invalid': submitted && fval.NewPassword.errors }\">\r\n                    <div *ngIf=\"submitted && fval.NewPassword.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.NewPassword.errors.required\">\r\n                            New password is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Conform password</label>\r\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"ConfirmPassword\" formControlName=\"ConfirmPassword\" [ngClass]=\"{ 'is-invalid': submitted && fval.ConfirmPassword.errors }\">\r\n                    <div *ngIf=\"submitted && fval.ConfirmPassword.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.ConfirmPassword.errors.required\">\r\n                            Conformed password is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <input type=\"button\" class=\"fadeIn fourth\" value=\"Update Password\" (click)=\"onSubmit($event)\">\r\n\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "JDQ0":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gym-expenses/gym-expenses.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n        <div style=\"margin-bottom:5px;\">\r\n            <button class=\"btn-info\" (click)=\"AddExpense()\">Add Expense</button>\r\n        </div>\r\n        <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                         class=\"ag-theme-alpine\"\r\n                         [columnDefs]=\"columnDefs\"\r\n                         (gridReady)=\"onGridReady($event)\"\r\n                         [frameworkComponents]=\"frameworkComponents\"\r\n                         [animateRows]=\"true\"\r\n                         pagination=\"true\"\r\n                         [rowData]=\"rowData\"\r\n                         paginationPageSize=\"20\">\r\n        </ag-grid-angular>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "Ky7V":
/*!******************************************************!*\
  !*** ./src/app/all-reports/all-reports.component.ts ***!
  \******************************************************/
/*! exports provided: AllReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllReportsComponent", function() { return AllReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_all_reports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./all-reports.component.html */ "0eA4");
/* harmony import */ var _all_reports_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-reports.component.css */ "3KRp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ "JcrP");









let AllReportsComponent = class AllReportsComponent {
    constructor(gymServices, formBuilder, _router) {
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.optionValue = false;
        this._Members = [];
        this.columnDefs = [
            {
                headerName: 'Name',
                field: 'MbrName',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Mobile No',
                field: 'MbrMob',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'DOB',
                field: 'MbrDOB',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Marrial Status',
                field: 'MbrMarrialStatus',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Email',
                field: 'MbrEmail',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Addr',
                field: 'MbrAddr',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'City',
                field: 'MbrCity',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'State',
                field: 'MbrState',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Pincode',
                field: 'MbrPincode',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'PT Charges',
                field: 'MbrPTCharges',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Batch',
                field: 'MbrBatch',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Desciption',
                field: 'GeneralDesc',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Gender',
                field: 'MbrGender',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Membership Name',
                field: 'MbrShipName',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'MemberShip Start Dt',
                field: 'MbrshipStartDt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'MemberShip End Dt',
                field: 'MbrshipEndDt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Paid Amt',
                field: 'PaidAmt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Paid Dt',
                field: 'PaidDt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Paid By',
                field: 'PaidBy',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Membership',
                field: 'MembershipType',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Remaining Bal',
                field: 'RemBalance',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Total Members',
                field: 'TotalMembers',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Total Earn',
                field: 'TotalEarn',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Total Amount',
                field: 'TotalAmount',
                filter: 'agTextColumnFilter'
            }
        ];
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
        this.AllReportsForm = this.formBuilder.group({
            MemberId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]],
        });
        this.GetAllMembers();
    }
    GetAllMembers() {
        debugger;
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                this._Members = result;
            }
        }, error => alert(error.message));
    }
    OnReportChanges(e) {
        this.rdValue = e.target.value;
        if (e.target.value == 'YearlyReport') {
            this.optionValue = true;
        }
        else
            this.optionValue = false;
    }
    onGridReady(params) {
        debugger;
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onSubmit() {
        debugger;
        this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrMob', 'MbrDOB', 'MbrMarrialStatus', 'MbrEmail', 'MbrAddr', 'MbrCity', 'MbrState', 'MbrPincode', 'MbrPTCharges', 'MbrBatch', 'GeneralDesc', 'MbrGender', 'MbrShipName', 'MbrshipStartDt', 'MbrshipEndDt', 'PaidAmt', 'PaidDt', 'PaidBy', 'MembershipType', 'RemBalance', 'TotalAmount', 'TotalEarn', 'TotalMembers'], false);
        if (this.rdValue == "YearlyReport") {
            if (this.MemberId != null) {
                this.gymServices.GetMemberYearlyReport(this.MemberId).subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                        this.rowData = result;
                        this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrMob', 'MbrDOB', 'MbrMarrialStatus', 'MbrEmail', 'MbrAddr', 'MbrCity', 'MbrState', 'MbrPincode', 'MbrPTCharges', 'MbrBatch', 'GeneralDesc', 'MbrGender', 'MbrShipName', 'MbrshipStartDt', 'MbrshipEndDt', 'PaidAmt', 'PaidDt', 'PaidBy', 'MembershipType', 'RemBalance'], true);
                    }
                    else {
                        this.rowData = "";
                    }
                }, error => alert(error.message));
            }
            else {
                alert("Please select Members");
            }
        }
        else if (this.rdValue == "FinantialReport") {
            //this.gymServices.().subscribe(result => {
            //    if (!isNull(result)) {
            //        alert(result);
            //        return this._router.navigate(["/PTDetails"]);
            //    }
            //}, error => alert(error.message))
        }
        else if (this.rdValue == "Summury") {
            this.gymServices.GetSummaryReport().subscribe(result => {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                    this.rowData = result;
                    this.gridColumnApi.setColumnsVisible(['MbrShipName', 'MbrshipStartDt', 'MbrshipEndDt', 'TotalMembers', 'TotalEarn'], true);
                }
                else {
                    this.rowData = "";
                }
            }, error => alert(error.message));
        }
        else if (this.rdValue == "MbrShipReport") {
            this.gymServices.GetMembershipReport().subscribe(result => {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                    this.rowData = result;
                    this.gridColumnApi.setColumnsVisible(['MbrShipName', 'MbrshipStartDt', 'MbrshipEndDt', 'TotalMembers', 'TotalEarn'], true);
                }
                else {
                    this.rowData = "";
                }
            }, error => alert(error.message));
        }
        else if (this.rdValue == "PersonalTraining") {
            this.gymServices.GetPTReport().subscribe(result => {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                    this.rowData = result;
                    this.gridColumnApi.setColumnsVisible(['MbrName', 'TotalAmount'], true);
                }
                else {
                    this.rowData = "";
                }
            }, error => alert(error.message));
        }
    }
    exportToExcel() {
        // Get the grid data
        const rowData = this.rowData;
        // Create a new workbook
        const workbook = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_new();
        // Create a new worksheet
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].json_to_sheet(rowData);
        // Add the worksheet to the workbook
        xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_append_sheet(workbook, worksheet, 'Data');
        // Generate the Excel file
        xlsx__WEBPACK_IMPORTED_MODULE_8__["writeFile"](workbook, 'data.xlsx');
    }
};
AllReportsComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
AllReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-all-reports',
        template: _raw_loader_all_reports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_all_reports_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], AllReportsComponent);



/***/ }),

/***/ "M1XH":
/*!******************************************************!*\
  !*** ./src/app/gym-profile/gym-profile.component.ts ***!
  \******************************************************/
/*! exports provided: GymProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymProfileComponent", function() { return GymProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_gym_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./gym-profile.component.html */ "IKYZ");
/* harmony import */ var _gym_profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gym-profile.component.css */ "3kGv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








//import { debug } from 'console';
let GymProfileComponent = class GymProfileComponent {
    constructor(gymServices, formBuilder, _router, route) {
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.route = route;
        this.submitted = false;
        this.isShown = false; // hidden by default
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
        if (localStorage.getItem('isAdmin') != null && localStorage.getItem('isAdmin') == "false") {
            this.btnValue = "Activate Admin Profile";
        }
        else {
            this.btnValue = "De-Activate Admin Profile";
        }
        this.GymProfileForm = this.formBuilder.group({
            GymProfileId: [''],
            FName: [''],
            LName: [''],
            GymName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Address: [''],
            EMailId: [''],
            MbrShipName: [''],
            PaidAmt: [''],
            mbrShipStatus: [''],
            MbrshipStartDt: [''],
            MbrshipEndDt: [''],
            GSTNo: [''],
            Password: [''],
            MobileNumber: [''],
            Website: [''],
            AddedBy: [''],
            OldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            NewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            OTPValue: [''],
        });
        this.GetGymProfile();
    }
    onSubmit(param) {
        debugger;
        this.submitted = true;
        if (param.target.value == "Update Profile") {
            this.GymProfileForm.controls['OldPassword'].disable();
            this.GymProfileForm.controls['NewPassword'].disable();
            this.GymProfileForm.controls['ConfirmPassword'].disable();
            if (!this.GymProfileForm.invalid) {
                this.gymServices.UpdateGymProfileDetails(this.GymProfileForm.value).subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                        alert("Data Updated.");
                        this.GymProfileForm.controls['OldPassword'].enable();
                        this.GymProfileForm.controls['NewPassword'].enable();
                        this.GymProfileForm.controls['ConfirmPassword'].enable();
                        return this._router.navigate(["/GymProfile"]);
                    }
                    else {
                        this.GymProfileForm.controls['OldPassword'].enable();
                        alert("Error !");
                    }
                }, error => alert(error.message));
            }
        }
        else if (param.target.value == "Activate Admin Profile") {
            this.GymProfileForm.controls['OldPassword'].disable();
            this.GymProfileForm.controls['NewPassword'].disable();
            this.GymProfileForm.controls['ConfirmPassword'].disable();
            if (!this.GymProfileForm.invalid) {
                this.isShown = true;
            }
        }
        else if (param.target.value == "De-Activate Admin Profile") {
            this.GymProfileForm.controls['OldPassword'].disable();
            this.GymProfileForm.controls['NewPassword'].disable();
            this.GymProfileForm.controls['ConfirmPassword'].disable();
            if (!this.GymProfileForm.invalid) {
                this.isShown = true;
                this.btnValue = "Activate Admin Profile";
                localStorage.setItem("isAdmin", 'false');
                return this._router.navigate(["/Home"]);
            }
        }
        else { // Update 
            if (!this.GymProfileForm.invalid) {
                this.gymServices.UpdatePassowrd(this.GymProfileForm.value).subscribe(result => {
                    if (Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                        alert("Password Updated.");
                        return this._router.navigate(["/GymProfile"]);
                    }
                    else {
                        alert("Incorrect Creiditials");
                    }
                }, error => alert(error.message));
            }
        }
    }
    GetGymProfile() {
        debugger;
        this.gymServices.GetGymProfileDetails().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                this.GymProfileId = result.GymProfileId;
                this.FName = result.FName;
                this.LName = result.LName;
                this.GymName = result.GymName;
                this.Address = result.Address;
                this.EMailId = result.EMailId;
                this.MbrShipName = result.MbrShipName;
                this.PaidAmt = result.PaidAmt;
                this.mbrShipStatus = result.mbrShipStatus;
                this.MbrshipStartDt = result.MbrshipStartDt;
                this.MbrshipEndDt = result.MbrshipEndDt;
                this.GSTNo = result.GSTNo;
                this.MobileNumber = result.MobileNumber;
                this.Website = result.Website;
            }
        }, error => alert(error.message));
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
        }
        return true;
    }
    VerifyOTP(event) {
        if ((this.OTPValue.length + 1) == 6) {
            // Verify OTP From DB
            if (!this.GymProfileForm.invalid) {
                this.gymServices.VerifyOTP(this.OTPValue + event.key).subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                        if (result) {
                            this.isShown = false;
                            this.btnValue = "De-Activate Admin Profile";
                            localStorage.setItem("isAdmin", 'true');
                            return this._router.navigate(["/Home"]);
                        }
                        else {
                        }
                    }
                    else {
                        alert("Incorrect OTP");
                    }
                }, error => alert(error.message));
            }
        }
        return true;
    }
    get fval() {
        return this.GymProfileForm.controls;
    }
};
GymProfileComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
GymProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-gym-profile',
        template: _raw_loader_gym_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gym_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], GymProfileComponent);



/***/ }),

/***/ "Mw/O":
/*!***************************************************!*\
  !*** ./src/app/ptdetails/ptdetails.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B0ZGV0YWlscy9wdGRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "NaPp":
/*!*********************************************************!*\
  !*** ./src/app/add-employee/add-employee.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1lbXBsb3llZS9hZGQtZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "O6WU":
/*!*********************************************************!*\
  !*** ./src/app/gym-branches/gym-branches.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d5bS1icmFuY2hlcy9neW0tYnJhbmNoZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "OAlN":
/*!********************************************************!*\
  !*** ./src/app/Renders/edit-btn-renderer.component.ts ***!
  \********************************************************/
/*! exports provided: EditBtnRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBtnRendererComponent", function() { return EditBtnRendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");




let EditBtnRendererComponent = class EditBtnRendererComponent {
    constructor(gymServices, _router) {
        this.gymServices = gymServices;
        this._router = _router;
    }
    agInit(params) {
        this.params = params;
    }
    refresh(param) {
        return true;
    }
    OnEditClick($event) {
        const params = {
            event: $event,
            rowData: this.params.node.data,
        };
        //return this._router.navigate(["/AddEmployee"]);
        this.params.onClick(params);
    }
};
EditBtnRendererComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_3__["GymService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EditBtnRendererComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-btn-renderer',
        template: '<img (click)="OnEditClick($event)" src="./assets/Edit_img.png" alt="" class = "picture1" />',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_3__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], EditBtnRendererComponent);



/***/ }),

/***/ "OnQv":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-expenses/add-expenses.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{modelheaderval}}</h4>\r\n        <hr />\r\n        <form [formGroup]=\"AddExpensesForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"ExpensesId\" formControlName=\"ExpensesId\" style=\"display:none\">\r\n            </div>\r\n            <div class=\"form-row\">\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Date </label>\r\n                    <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"ExpenseDate\" formControlName=\"ExpenseDate\" [ngClass]=\"{ 'is-invalid': submitted && fval.ExpenseDate.errors }\">\r\n                    <div *ngIf=\"submitted && fval.ExpenseDate.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.ExpenseDate.errors.required\">\r\n                            Date is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Expense Type</label>\r\n                    <select class=\"form-control\" [(ngModel)]=\"Category\" formControlName=\"Category\" [ngClass]=\"{ 'is-invalid': submitted && fval.Category.errors }\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option value=\"Travel\">Travel</option>\r\n                        <option value=\"Cleaning\">Cleaning</option>\r\n                        <option value=\"Equipments\">Equipments</option>\r\n                        <option value=\"Others\">Others</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && fval.Category.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.Category.errors.required\">\r\n                            Expense Type is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                 \r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Sub Category</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"SubCategory\" formControlName=\"SubCategory\" maxlength=\"10\">\r\n                </div>\r\n                 \r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Amount</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Amount\" formControlName=\"Amount\" (keypress)=\"numberOnly($event)\" maxlength=\"10\" [ngClass]=\"{ 'is-invalid': submitted && fval.Amount.errors }\">\r\n                    <div *ngIf=\"submitted && fval.Amount.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.Amount.errors.required\">\r\n                            Amount is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Description</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Description\" formControlName=\"Description\" maxlength=\"10\">\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"{{btnVal}}\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "Plrt":
/*!******************************************************************!*\
  !*** ./src/app/remaining-balance/remaining-balance.component.ts ***!
  \******************************************************************/
/*! exports provided: RemainingBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemainingBalanceComponent", function() { return RemainingBalanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_remaining_balance_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./remaining-balance.component.html */ "qDRS");
/* harmony import */ var _remaining_balance_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remaining-balance.component.css */ "2xHM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Renders_edit_btn_renderer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Renders/edit-btn-renderer.component */ "OAlN");








let RemainingBalanceComponent = class RemainingBalanceComponent {
    constructor(gymServices, _router, route) {
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.frameworkComponents = {
            buttonRenderer: _Renders_edit_btn_renderer_component__WEBPACK_IMPORTED_MODULE_7__["EditBtnRendererComponent"],
        };
        this.columnDefs = [
            {
                headerName: 'Id',
                field: 'MbrId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
            },
            {
                headerName: 'Name',
                field: 'MbrName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Mobile',
                field: 'MbrMob',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Membership Plan',
                field: 'MbrShipName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Batch',
                field: 'MbrBatch',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Last Paid Amount',
                field: 'lastPaidAmt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Last Payment Date',
                field: 'PaidDt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Last Paid By',
                field: 'LastPaidBy',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Remaining Balance',
                field: 'RemBalance',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Membership StartDt',
                field: 'MbrshipStartDt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Membership EndDt',
                field: 'MbrshipEndDt',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Payment of',
                field: 'MembershipType',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Action',
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onBtnClick.bind(this),
                }
            },
        ];
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
    }
    onBtnClick(e) {
        /*alert(e.rowData);   */
        return this._router.navigate(["/AddRemainingBalance"], { queryParams: e.rowData });
    }
    onGridReady(params) {
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetAllMemberShipPlanUser().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                dataValue = result;
                params.api.setRowData(dataValue);
            }
            else {
                dataValue = "";
                params.api.setRowData(dataValue);
            }
        }, error => alert(error.message));
    }
};
RemainingBalanceComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
RemainingBalanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-remaining-balance',
        template: _raw_loader_remaining_balance_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_remaining_balance_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], RemainingBalanceComponent);



/***/ }),

/***/ "QdYh":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_counter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./counter.component.html */ "VECJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-counter-component',
        template: _raw_loader_counter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], CounterComponent);



/***/ }),

/***/ "RV7M":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Sqpg":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav-menu.component.html */ "XXFw");
/* harmony import */ var _nav_menu_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-menu.component.css */ "a56m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");







let NavMenuComponent = class NavMenuComponent {
    constructor(_router, gymServices) {
        this._router = _router;
        this.gymServices = gymServices;
        this.isShown = true;
        this.visible = false;
    }
    ngOnInit() {
        this.isShown = JSON.parse(localStorage.getItem('isAdmin'));
        this.GetGymProfile();
    }
    collapse() {
        this.visible = false;
    }
    toggle() {
        this.visible = !this.visible;
    }
    hide() { this.visible = false; }
    show() { this.visible = true; }
    logout() {
        if (confirm("Are you sure to logout ?")) {
            localStorage.clear();
            return this._router.navigate([""]);
        }
    }
    GetGymProfile() {
        debugger;
        this.gymServices.GetGymProfileDetails().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                this.GymName = result.GymName;
            }
        }, error => alert(error.message));
    }
};
NavMenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_6__["GymService"] }
];
NavMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-menu',
        template: _raw_loader_nav_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_menu_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_gym_service__WEBPACK_IMPORTED_MODULE_6__["GymService"]])
], NavMenuComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], AppComponent);



/***/ }),

/***/ "U9FP":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-ptdetails/add-ptdetails.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{modelheaderval}}</h4>\r\n\r\n        <form [formGroup]=\"AddPTForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrId\" formControlName=\"MbrId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrUserId\" formControlName=\"MbrUserId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrShipId\" formControlName=\"MbrShipId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"TrainerId\" formControlName=\"TrainerId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MembershipType\" formControlName=\"MembershipType\" style=\"display:none\" value=\"PT\">\r\n\r\n            </div>\r\n            <hr />\r\n\r\n            <div>\r\n\r\n                <div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label>Select Member</label>\r\n                            <select formControlName=\"MbrId\" [(ngModel)]=\"MbrId\" class=\"form-control\" (change)=\"showPersonalTrainingPlans($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrId.errors }\">\r\n                                <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                                <option *ngFor=\"let mbr of _PTMembers\" value={{mbr.MbrId}}>\r\n                                    {{mbr.MbrName}}\r\n                                </option>\r\n                            </select>\r\n                            <div *ngIf=\"submitted && fval.MbrId.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"fval.MbrId.errors.required\">\r\n                                    Member is required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr />\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>PT Traning Plan</label>\r\n                        <select formControlName=\"MbrShipId\" [(ngModel)]=\"MbrShipId\" class=\"form-control\" (change)=\"showPersonalTrainingPlans($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrShipId.errors }\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                            <option *ngFor=\"let plan of _MbrPlans\" value={{plan.MbrShipId}}>\r\n                                {{plan.MbrShipName}} -({{plan.MbrShipDurationInDays}})\r\n                            </option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && fval.MbrShipId.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.MbrShipId.errors.required\">\r\n                                Membership Plan is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Training Days</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrPtDays\" formControlName=\"MbrPtDays\" disabled>\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>PT Trainer Name</label>\r\n                        <select formControlName=\"TrainerId\" [(ngModel)]=\"TrainerId\" class=\"form-control\" (change)=\"showPTTrainerCharges($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && fval.TrainerId.errors }\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                            <option *ngFor=\"let plan of _PTTrainer\" value={{plan.MbrId}}>\r\n                                {{plan.MbrName}}\r\n                            </option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && fval.TrainerId.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.TrainerId.errors.required\">\r\n                                Trainer Name is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>PT Charges</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrPTChargesofTrainer\" formControlName=\"MbrPTChargesofTrainer\" disabled>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Paid Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"PaidAmt\" [(ngModel)]=\"PaidAmt\" [ngClass]=\"{ 'is-invalid': submitted && fval.PaidAmt.errors }\">\r\n                        <div *ngIf=\"submitted && fval.PaidAmt.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.PaidAmt.errors.required\">\r\n                                Paid amount is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid By</label>\r\n                        <select class=\"form-control\" formControlName=\"PaidBy\" [(ngModel)]=\"PaidBy\" [ngClass]=\"{ 'is-invalid': submitted && fval.PaidBy.errors }\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                            <option value=\"Cash\">Cash</option>\r\n                            <option value=\"Card\">Card</option>\r\n                            <option value=\"Gpay\">Gpay</option>\r\n                            <option value=\"PhonePay\">PhonePay</option>\r\n\r\n                        </select>\r\n                        <div *ngIf=\"submitted && fval.PaidBy.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.PaidBy.errors.required\">\r\n                                Paid by is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"PaidDt\" formControlName=\"PaidDt\" [ngClass]=\"{ 'is-invalid': submitted && fval.PaidDt.errors }\">\r\n                        <div *ngIf=\"submitted && fval.PaidDt.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.PaidDt.errors.required\">\r\n                                Paid Date is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Start Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" (change)=\"onDateChange($event)\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrshipStartDt\" formControlName=\"MbrshipStartDt\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> End Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrshipEndDt\" formControlName=\"MbrshipEndDt\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>PT Sessions</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"PTSessions\" [(ngModel)]=\"PTSessions\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Description</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"Discription\" [(ngModel)]=\"Discription\">\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <!--<input type=\"submit\" class=\"fadeIn fourth\" value=\"Add\">-->\r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"{{btnVal}}\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "VECJ":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <!--<app-nav-menu></app-nav-menu>-->\r\n  <div class=\"container-fluid p-0\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n");

/***/ }),

/***/ "WUtA":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ptdetails/ptdetails.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n        <div style=\"margin-bottom:5px;\">\r\n            <button class=\"btn-info\" (click)=\"AddPT()\">Add Personal Training</button>\r\n        </div>\r\n        <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                         class=\"ag-theme-alpine\"\r\n                         [columnDefs]=\"columnDefs\"\r\n                         (gridReady)=\"onGridReady($event)\"\r\n                         [frameworkComponents]=\"frameworkComponents\"\r\n                         [animateRows]=\"true\"\r\n                          [rowData]=\"rowData\"\r\n                         pagination=\"true\"\r\n                         paginationPageSize=\"20\">\r\n        </ag-grid-angular>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "WkqT":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "XXFw":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3\">\r\n        <div class=\"container\">\r\n            <div class=\"headerTitle\">\r\n                <a class=\"navbar-brand\" [routerLink]=\"['/Home']\">Welcome {{GymName}}</a>\r\n            </div>\r\n\r\n            <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n                 [ngClass]=\"{ show: isExpanded }\" style=\"width:70%\">\r\n                <ul class=\"navbar-nav mr-auto horizontal\">\r\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link\">Gym Details</a>\r\n                        <ul class=\"navBackColor\">\r\n                            <li>\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/MbrPlans']\">MemberShip Plans</a>\r\n\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/MembershipHistory']\"> Attendend</a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link \">Gym Member</a> \r\n                        <ul class=\"navBackColor\">\r\n                            <li>\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/Employee']\">Members</a>\r\n\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/PTDetails']\">Personal Training</a>\r\n\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/RenewalMembership']\">Renewal Memberships</a>\r\n\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/RemainingBalance']\">Remaining Balance</a>\r\n                                <div>\r\n                                    <a class=\"nav-link text-dark\" [routerLink]=\"['/MembershipHistory']\"> Members History</a>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link\">Account</a>\r\n                        <ul class=\"navBackColor\">\r\n                            <li>\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/GymExpenses']\">Expenses</a>\r\n                                <!--<div *ngIf=\"isShown\">-->\r\n                                    <a class=\"nav-link text-dark\" [routerLink]=\"['/SalaryDetails']\">Salary</a>\r\n                                <!--</div>-->\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/AllInvoices']\">All Invoices</a>\r\n\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/AllReports']\">Reports</a>\r\n\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link\">Profile</a>\r\n                        <ul class=\"navBackColor\">\r\n                            <li>\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/GymProfile']\">Gym Profile</a> \r\n\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/AppSupport']\">Support</a>\r\n\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/SendMessage']\">Send Message</a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n\r\n                </ul>\r\n            </div>\r\n            <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n                 [ngClass]=\"{ show: isExpanded }\">\r\n                <ul class=\"navbar-nav mr-auto horizontal\" style=\"text-align:center\"> \r\n                    <li class=\"rightli\" [routerLinkActive]=\"['link-active']\" > \r\n                        <img   src=\"./assets/shutdown.png\" class=\"picture1\" (click)=\"logout()\" />\r\n\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n\r\n        </div>\r\n    </nav>\r\n</header>\r\n");

/***/ }),

/***/ "XY6P":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "GVV7");
/* harmony import */ var _forgot_password_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.component.css */ "eVDC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");








let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(gymServices, formBuilder, _router) {
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
    }
    ngOnInit() {
        /*this.nav.hide();*/
        this.ForgotPasswordform = this.formBuilder.group({
            EmailAdr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    onSubmit() {
        //return this._router.navigate(["/Employee"]);
        this.gymServices.ForgotPassword(this.ForgotPasswordform.controls.EmailAdr.value).subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result.access_token)) {
                return this._router.navigate(["/Login"]);
            }
        }, error => alert(error.message));
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_7__["GymService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_7__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ForgotPasswordComponent);



/***/ }),

/***/ "Xhvp":
/*!********************************************************!*\
  !*** ./src/app/all-invoices/all-invoices.component.ts ***!
  \********************************************************/
/*! exports provided: AllInvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllInvoicesComponent", function() { return AllInvoicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_all_invoices_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./all-invoices.component.html */ "YJZM");
/* harmony import */ var _all_invoices_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-invoices.component.css */ "efhF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









let AllInvoicesComponent = class AllInvoicesComponent {
    constructor(gymServices, formBuilder, _router, datePipe) {
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.datePipe = datePipe;
        this._InvoiceMbrs = [];
        this._InvoiceMbrsList = [];
        this.DispayInvoice = false;
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
        this.AddInvoiceForm = this.formBuilder.group({
            InvoiceNumber: [''],
            MbrUGymNameserId: [''],
            GymAddress: [''],
            GymContactNo: [''],
            PaidDt: [''],
            Serivice1: [''],
            PaidAmt: [''],
            InvoiceYear: [''],
            MbrId: [''],
            MbrUserId: [''],
        });
        this.DispayInvoice = false;
    }
    ShowMembersByYear(Year) {
        debugger;
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                result = result.filter(x => x.MbrType != "Enquiry");
                this._InvoiceMbrs = result.filter(x => x.LastUpdatedDt == null ? "" : new Date(x.LastUpdatedDt).getFullYear() == Year);
            }
            else {
                this._InvoiceMbrs = null;
            }
        }, error => alert(error.message));
    }
    GetInvoiceList(MbrId) {
        this.MbrUserId = 'undefined';
        this.gymServices.GetInvoiceList(MbrId).subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                this._InvoiceMbrsList = result;
            }
            else {
                this._InvoiceMbrsList = null;
            }
        }, error => alert(error.message));
    }
    ShowInvoice(MbrUserId) {
        this.gymServices.GetInvoice(MbrUserId).subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                this.InvoiceNumber = result.InvoiceId;
                this.GymName = result.GymName;
                this.GymAddress = result.Address;
                this.GymContactNo = result.MobileNumber;
                this.Serivice1 = result.MembershipType;
                this.PaidAmt = result.PaidAmt;
                this.PaidDt = result.PaidDt;
                this.DispayInvoice = true;
            }
        }, error => alert(error.message));
    }
};
AllInvoicesComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }
];
AllInvoicesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-all-invoices',
        template: _raw_loader_all_invoices_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_all_invoices_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
], AllInvoicesComponent);



/***/ }),

/***/ "XjGh":
/*!*********************************************************!*\
  !*** ./src/app/gym-expenses/gym-expenses.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d5bS1leHBlbnNlcy9neW0tZXhwZW5zZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "YJZM":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-invoices/all-invoices.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n\r\n        <form [formGroup]=\"AddInvoiceForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Select Year</label>\r\n                    <select formControlName=\"InvoiceYear\" (change)=\"ShowMembersByYear($event.target.value)\" [(ngModel)]=\"InvoiceYear\" class=\"form-control\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option value=\"2023\">2023</option>\r\n                        <option value=\"2022\">2022</option>\r\n                        <option value=\"2021\">2021</option>\r\n                        <option value=\"2020\">2020</option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Select Member</label>\r\n                    <select formControlName=\"MbrId\" [(ngModel)]=\"MbrId\" class=\"form-control\" (change)=\"GetInvoiceList($event.target.value)\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option *ngFor=\"let mbr of _InvoiceMbrs\" value={{mbr.MbrId}}>\r\n                            {{mbr.MbrName}}\r\n                        </option>\r\n                    </select>\r\n                     \r\n                </div>\r\n\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Select Invoice</label>\r\n                    <select formControlName=\"MbrUserId\" [(ngModel)]=\"MbrUserId\" class=\"form-control\" (change)=\"ShowInvoice($event.target.value)\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option *ngFor=\"let mbr of _InvoiceMbrsList\" value={{mbr.MbrUserId}}>\r\n                            {{mbr.MembershipType}}\r\n                        </option>\r\n                    </select>\r\n                   \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"invoice\"  *ngIf=\"DispayInvoice\">\r\n                <div class=\"header\">\r\n                    <h1>INVOICE</h1>\r\n                    <h2>Number: {{InvoiceNumber}}</h2>\r\n                </div>\r\n                <div class=\"client-details\">\r\n                    <h3>Client Details:</h3>\r\n                    <p>{{GymName}}</p>\r\n                    <p>{{GymAddress}}</p>\r\n                    <p>{{GymContactNo}}</p>\r\n                </div>\r\n                <div class=\"invoice-details\">\r\n                    <h3>Invoice Details</h3>\r\n                    <p>Date: {{PaidDt}}</p> \r\n                </div>\r\n                <table class=\"invoice-table\">\r\n                    <tr>\r\n                        <th>Service Name</th>\r\n                        <th>Price</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>{{Serivice1}}</td>\r\n                        <td>{{PaidAmt}}</td>\r\n                    </tr>\r\n                    <!-- Add additional services as needed -->\r\n                </table>\r\n                <div class=\"total\">\r\n                    <h3>Total: {{PaidAmt}}</h3>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "Sqpg");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./counter/counter.component */ "QdYh");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "H6fx");
/* harmony import */ var _salary_master_salary_master_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./salary-master/salary-master.component */ "kgRn");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee/employee.component */ "66QQ");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./btn-cell-renderer/btn-cell-renderer.component */ "5oOU");
/* harmony import */ var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-employee/add-employee.component */ "9HQw");
/* harmony import */ var _membership_plan_membership_plan_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./membership-plan/membership-plan.component */ "emN6");
/* harmony import */ var _gym_branches_gym_branches_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./gym-branches/gym-branches.component */ "0vPN");
/* harmony import */ var _gym_profile_gym_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./gym-profile/gym-profile.component */ "M1XH");
/* harmony import */ var _add_membership_plan_add_membership_plan_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add-membership-plan/add-membership-plan.component */ "xQ8Y");
/* harmony import */ var _add_gym_branches_add_gym_branches_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-gym-branches/add-gym-branches.component */ "onyv");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./payments/payments.component */ "8/Uk");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @swimlane/ngx-charts */ "Raey");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _gym_expenses_gym_expenses_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./gym-expenses/gym-expenses.component */ "AK+C");
/* harmony import */ var _add_expenses_add_expenses_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./add-expenses/add-expenses.component */ "9yJv");
/* harmony import */ var _renewal_membership_renewal_membership_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./renewal-membership/renewal-membership.component */ "+1wY");
/* harmony import */ var _remaining_balance_remaining_balance_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./remaining-balance/remaining-balance.component */ "Plrt");
/* harmony import */ var _membership_history_membership_history_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./membership-history/membership-history.component */ "Gs9t");
/* harmony import */ var _trainers_history_trainers_history_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./trainers-history/trainers-history.component */ "CKO6");
/* harmony import */ var _renewal_payments_renewal_payments_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./renewal-payments/renewal-payments.component */ "g9dR");
/* harmony import */ var _add_remaining_balance_add_remaining_balance_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./add-remaining-balance/add-remaining-balance.component */ "HNxn");
/* harmony import */ var _confirm_equal_validator_directive_ts_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./confirm-equal-validator.directive.ts.directive */ "hfG8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ptdetails_ptdetails_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ptdetails/ptdetails.component */ "4uh6");
/* harmony import */ var _add_ptdetails_add_ptdetails_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./add-ptdetails/add-ptdetails.component */ "6vlH");
/* harmony import */ var _Renders_btn_renderer_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Renders/btn-renderer.component */ "0eGd");
/* harmony import */ var _Renders_edit_btn_renderer_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Renders/edit-btn-renderer.component */ "OAlN");
/* harmony import */ var _all_invoices_all_invoices_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./all-invoices/all-invoices.component */ "Xhvp");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./support/support.component */ "zdD4");
/* harmony import */ var _send_message_send_message_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./send-message/send-message.component */ "3Vdu");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./all-reports/all-reports.component */ "Ky7V");
/* harmony import */ var _add_salary_add_salary_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./add-salary/add-salary.component */ "n6vJ");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "XY6P");














































/*import { NgbModule } from '@ng-bootstrap/ng-bootstrap';*/
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_10__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_11__["FetchDataComponent"],
            _salary_master_salary_master_component__WEBPACK_IMPORTED_MODULE_12__["SalaryMasterComponent"],
            _employee_employee_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_15__["BtnCellRendererComponent"],
            _Renders_btn_renderer_component__WEBPACK_IMPORTED_MODULE_37__["BtnRendererComponent"],
            _Renders_edit_btn_renderer_component__WEBPACK_IMPORTED_MODULE_38__["EditBtnRendererComponent"],
            _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_16__["AddEmployeeComponent"],
            _membership_plan_membership_plan_component__WEBPACK_IMPORTED_MODULE_17__["MembershipPlanComponent"],
            _gym_branches_gym_branches_component__WEBPACK_IMPORTED_MODULE_18__["GymBranchesComponent"],
            _gym_profile_gym_profile_component__WEBPACK_IMPORTED_MODULE_19__["GymProfileComponent"],
            _add_membership_plan_add_membership_plan_component__WEBPACK_IMPORTED_MODULE_20__["AddMembershipPlanComponent"],
            _add_gym_branches_add_gym_branches_component__WEBPACK_IMPORTED_MODULE_21__["AddGymBranchesComponent"],
            _payments_payments_component__WEBPACK_IMPORTED_MODULE_22__["PaymentsComponent"],
            _gym_expenses_gym_expenses_component__WEBPACK_IMPORTED_MODULE_25__["GymExpensesComponent"],
            _add_expenses_add_expenses_component__WEBPACK_IMPORTED_MODULE_26__["AddExpensesComponent"],
            _renewal_membership_renewal_membership_component__WEBPACK_IMPORTED_MODULE_27__["RenewalMembershipComponent"],
            _remaining_balance_remaining_balance_component__WEBPACK_IMPORTED_MODULE_28__["RemainingBalanceComponent"],
            _membership_history_membership_history_component__WEBPACK_IMPORTED_MODULE_29__["MembershipHistoryComponent"],
            _trainers_history_trainers_history_component__WEBPACK_IMPORTED_MODULE_30__["TrainersHistoryComponent"],
            _renewal_payments_renewal_payments_component__WEBPACK_IMPORTED_MODULE_31__["RenewalPaymentsComponent"],
            _add_remaining_balance_add_remaining_balance_component__WEBPACK_IMPORTED_MODULE_32__["AddRemainingBalanceComponent"],
            _confirm_equal_validator_directive_ts_directive__WEBPACK_IMPORTED_MODULE_33__["ConfirmEqualValidatorDirective"],
            _ptdetails_ptdetails_component__WEBPACK_IMPORTED_MODULE_35__["PTDetailsComponent"],
            _add_ptdetails_add_ptdetails_component__WEBPACK_IMPORTED_MODULE_36__["AddPTDetailsComponent"],
            _all_invoices_all_invoices_component__WEBPACK_IMPORTED_MODULE_39__["AllInvoicesComponent"],
            _support_support_component__WEBPACK_IMPORTED_MODULE_40__["SupportComponent"],
            _send_message_send_message_component__WEBPACK_IMPORTED_MODULE_41__["SendMessageComponent"],
            _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_43__["AllReportsComponent"],
            _add_salary_add_salary_component__WEBPACK_IMPORTED_MODULE_44__["AddSalaryComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_45__["ForgotPasswordComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_23__["NgxChartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            //NgbModule,
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"].withComponents([_btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_15__["BtnCellRendererComponent"], _Renders_btn_renderer_component__WEBPACK_IMPORTED_MODULE_37__["BtnRendererComponent"], _Renders_edit_btn_renderer_component__WEBPACK_IMPORTED_MODULE_38__["EditBtnRendererComponent"]]),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"] },
                { path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
                { path: 'Employee', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeComponent"] },
                { path: 'AddEmployee', component: _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_16__["AddEmployeeComponent"] },
                { path: 'MbrPlans', component: _membership_plan_membership_plan_component__WEBPACK_IMPORTED_MODULE_17__["MembershipPlanComponent"] },
                { path: 'AddMbrPlans', component: _add_membership_plan_add_membership_plan_component__WEBPACK_IMPORTED_MODULE_20__["AddMembershipPlanComponent"] },
                { path: 'GymBranches', component: _gym_branches_gym_branches_component__WEBPACK_IMPORTED_MODULE_18__["GymBranchesComponent"] },
                { path: 'AddBranches', component: _add_gym_branches_add_gym_branches_component__WEBPACK_IMPORTED_MODULE_21__["AddGymBranchesComponent"] },
                { path: 'GymProfile', component: _gym_profile_gym_profile_component__WEBPACK_IMPORTED_MODULE_19__["GymProfileComponent"] },
                { path: 'Payments', component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_22__["PaymentsComponent"] },
                { path: 'GymExpenses', component: _gym_expenses_gym_expenses_component__WEBPACK_IMPORTED_MODULE_25__["GymExpensesComponent"] },
                { path: 'AddExpenses', component: _add_expenses_add_expenses_component__WEBPACK_IMPORTED_MODULE_26__["AddExpensesComponent"] },
                { path: 'RenewalMembership', component: _renewal_membership_renewal_membership_component__WEBPACK_IMPORTED_MODULE_27__["RenewalMembershipComponent"] },
                { path: 'RenewalPayments', component: _renewal_payments_renewal_payments_component__WEBPACK_IMPORTED_MODULE_31__["RenewalPaymentsComponent"] },
                { path: 'RemainingBalance', component: _remaining_balance_remaining_balance_component__WEBPACK_IMPORTED_MODULE_28__["RemainingBalanceComponent"] },
                { path: 'AddRemainingBalance', component: _add_remaining_balance_add_remaining_balance_component__WEBPACK_IMPORTED_MODULE_32__["AddRemainingBalanceComponent"] },
                { path: 'MembershipHistory', component: _membership_history_membership_history_component__WEBPACK_IMPORTED_MODULE_29__["MembershipHistoryComponent"] },
                { path: 'PTDetails', component: _ptdetails_ptdetails_component__WEBPACK_IMPORTED_MODULE_35__["PTDetailsComponent"] },
                { path: 'AddPTDetails', component: _add_ptdetails_add_ptdetails_component__WEBPACK_IMPORTED_MODULE_36__["AddPTDetailsComponent"] },
                { path: 'AllInvoices', component: _all_invoices_all_invoices_component__WEBPACK_IMPORTED_MODULE_39__["AllInvoicesComponent"] },
                { path: 'AppSupport', component: _support_support_component__WEBPACK_IMPORTED_MODULE_40__["SupportComponent"] },
                { path: 'SendMessage', component: _send_message_send_message_component__WEBPACK_IMPORTED_MODULE_41__["SendMessageComponent"] },
                { path: 'AllReports', component: _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_43__["AllReportsComponent"] },
                { path: 'AddSalary', component: _add_salary_add_salary_component__WEBPACK_IMPORTED_MODULE_44__["AddSalaryComponent"] },
                { path: 'SalaryDetails', component: _salary_master_salary_master_component__WEBPACK_IMPORTED_MODULE_12__["SalaryMasterComponent"] },
                { path: 'ForgotPassword', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_45__["ForgotPasswordComponent"] },
            ]),
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_42__["NgMultiSelectDropDownModule"].forRoot()
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_34__["DatePipe"]],
        entryComponents: [_btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_15__["BtnCellRendererComponent"], _Renders_btn_renderer_component__WEBPACK_IMPORTED_MODULE_37__["BtnRendererComponent"], _Renders_edit_btn_renderer_component__WEBPACK_IMPORTED_MODULE_38__["EditBtnRendererComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "a56m":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n   \r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n.container{\r\n    margin-left:20px !important;\r\n    max-width:100% !important;\r\n\r\n}\r\n\r\n.headerTitle\r\n{\r\n    margin-right:110px;\r\n    margin-left:20px;\r\n    font-weight:bold;\r\n    width:15%;\r\n}\r\n\r\nul li ul li a:hover {\r\n    background-color: #87AFC7 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHlCQUF5Qjs7QUFFN0I7O0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICAgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJveC1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgLjI1cmVtIC43NXJlbSByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4uaGVhZGVyVGl0bGVcclxue1xyXG4gICAgbWFyZ2luLXJpZ2h0OjExMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICB3aWR0aDoxNSU7XHJcbn1cclxudWwgbGkgdWwgbGkgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdBRkM3ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "aX6C":
/*!***************************************************************!*\
  !*** ./src/app/membership-plan/membership-plan.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnNoaXAtcGxhbi9tZW1iZXJzaGlwLXBsYW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "agtz":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/membership-plan/membership-plan.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n        <div style=\"margin-bottom:5px\">\r\n            <button class=\"btn-info\" (click)=\"onBtnClick()\">Add MemberShip Plan</button>\r\n        </div>\r\n        <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                         class=\"ag-theme-alpine\"\r\n                         [columnDefs]=\"columnDefs\"\r\n                         (gridReady)=\"onGridReady($event)\"\r\n                         [frameworkComponents]=\"frameworkComponents\"\r\n                         [animateRows]=\"true\"\r\n                         pagination=\"true\"\r\n                         [rowData]=\"rowData\"\r\n                         paginationPageSize=\"20\">\r\n        </ag-grid-angular>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "bHPt":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-salary/add-salary.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{modelheaderval}}</h4>\r\n        <form [formGroup]=\"AddSalaryForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div>\r\n                <hr />\r\n                <div class=\"form-row \">\r\n                    <h5 class=\"mb-2\">Add Salary</h5>\r\n                </div>\r\n                <div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label> Member Name </label>\r\n                            <select formControlName=\"MbrId\" [(ngModel)]=\"MbrId\" class=\"form-control\" (change)=\"ShowDesignations($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrId.errors }\">\r\n                                <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                                <option *ngFor=\"let mbr of _SalMembers\" value={{mbr.MbrId}}>\r\n                                    {{mbr.MbrName}}\r\n                                </option>\r\n                            </select>\r\n                            <div *ngIf=\"submitted && fval.MbrId.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"fval.MbrId.errors.required\">\r\n                                    Member is required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-row\">\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Designation</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrDesignation\" formControlName=\"MbrDesignation\" disabled> \r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Salary Motnh</label>\r\n                        <select formControlName=\"SalMonth\" [(ngModel)]=\"SalMonth\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.SalMonth.errors }\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                            <option value=\"Jan\">January</option>\r\n                            <option value=\"Feb\">Febrary</option>\r\n                            <option value=\"Mar\">March</option>\r\n                            <option value=\"Apr\">April</option>\r\n                            <option value=\"May\">May</option>\r\n                            <option value=\"Jun\">Jun</option>\r\n                            <option value=\"Jul\">July</option>\r\n                            <option value=\"Aug\">Augst</option>\r\n                            <option value=\"Sep\">September</option>\r\n                            <option value=\"Oct\">October</option>\r\n                            <option value=\"Nov\">November</option>\r\n                            <option value=\"Dec\">December</option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && fval.SalMonth.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.SalMonth.errors.required\">\r\n                                Salary Month is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"SalPaidDt\" formControlName=\"SalPaidDt\" [ngClass]=\"{ 'is-invalid': submitted && fval.SalPaidDt.errors }\">\r\n                        <div *ngIf=\"submitted && fval.SalPaidDt.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.SalPaidDt.errors.required\">\r\n                                Paid Date sis required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Total Salary</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"TotalSal\" formControlName=\"TotalSal\" disabled >\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Paid Salary</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"PaidSal\" formControlName=\"PaidSal\" [ngClass]=\"{ 'is-invalid': submitted && fval.PaidSal.errors }\">\r\n                        <div *ngIf=\"submitted && fval.PaidSal.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.PaidSal.errors.required\">\r\n                                Paid Salary is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Total Leaves</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"TotalLeaves\" formControlName=\"TotalLeaves\" value=\"0\">\r\n                        \r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Comment</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Comment\" formControlName=\"Comment\" >\r\n                        \r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <!--<input type=\"submit\" class=\"fadeIn fourth\" value=\"Add\">-->\r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"{{btnVal}}\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dJGj":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-gym-branches/add-gym-branches.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"p-2\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Branch</h4>\r\n    <hr />\r\n\r\n    <div class=\"form-row\">\r\n        <div class=\"form-group col-md-4\">\r\n            <label for=\"name\">Branch Name</label>\r\n            <input type=\"text\" [(ngModel)]=\"EmpName\" class=\"form-control\" formControlName=\"EmpName\" name=\"EmpName\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n            <label> Contact Person Name</label>\r\n            <input type=\"text\" [(ngModel)]=\"EmpMob\" class=\"form-control\" formControlName=\"EmpMob\" name=\"EmpMob\" (keypress)=\"numberOnly($event)\" maxlength=\"10\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n            <label> Contact Number</label>\r\n            <input type=\"text\" [(ngModel)]=\"EmpMob\" class=\"form-control\" formControlName=\"EmpMob\" name=\"EmpMob\" (keypress)=\"numberOnly($event)\" maxlength=\"10\">\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n\r\n\r\n        <div class=\"form-group col-md-4\">\r\n            <label> Address </label>\r\n            <input type=\"text\" [(ngModel)]=\"EmpMob\" class=\"form-control\" formControlName=\"EmpMob\" name=\"EmpMob\" (keypress)=\"numberOnly($event)\" maxlength=\"10\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n            <label> City</label>\r\n            <select [(ngModel)]=\"EmpCity\" formControlName=\"EmpCity\" name=\"EmpCity\" class=\"form-control\" (change)=\"filterForeCasts($event.target.value)\">\r\n                <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                <option value=\"Pune\" selected>Pune</option>\r\n                <option value=\"Mumbai\">Mumbai</option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n            <label> State</label>\r\n            <select [(ngModel)]=\"EmpState\" formControlName=\"EmpState\" name=\"EmpState\" class=\"form-control\" (change)=\"filterForeCasts($event.target.value)\">\r\n                <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                <option value=\"Maharastra\" selected>Maharastra</option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n            <label> Pincode</label>\r\n            <input type=\"text\" [(ngModel)]=\"EmpPincode\" class=\"form-control\" formControlName=\"EmpPincode\" name=\"EmpPincode\" (keypress)=\"numberOnly($event)\">\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <input type=\"submit\" class=\"fadeIn fourth\" value=\"Add\">\r\n    <input type=\"submit\" class=\"fadeIn fourth\" value=\"Cancel\">\r\n</div>\r\n");

/***/ }),

/***/ "dMQ9":
/*!***********************************************************!*\
  !*** ./src/app/add-ptdetails/add-ptdetails.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wdGRldGFpbHMvYWRkLXB0ZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "e7WC":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n        <div style=\"margin-bottom:5px;\">\r\n            <button class=\"btn-info\" (click)=\"AddEmployee()\">Add Member</button>\r\n        </div>\r\n        <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                         class=\"ag-theme-alpine\"\r\n                         [columnDefs]=\"columnDefs\"\r\n                         (gridReady)=\"onGridReady($event)\"\r\n                         [frameworkComponents]=\"frameworkComponents\"\r\n                         [animateRows]=\"true\"\r\n                         [rowData]=\"rowData\"\r\n                         pagination=\"true\"\r\n                         paginationPageSize=\"20\">\r\n        </ag-grid-angular>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "eVDC":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "ebd2":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trainers-history/trainers-history.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>trainers-history works!</p>\r\n");

/***/ }),

/***/ "efhF":
/*!*********************************************************!*\
  !*** ./src/app/all-invoices/all-invoices.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invoice {\r\n    font-family: Arial, sans-serif;\r\n    width: 800px;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    border:2px solid black;\r\n}\r\n\r\n.header {\r\n    background-color: lightgray;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.header h1 {\r\n        margin: 0;\r\n    }\r\n\r\n.header h2 {\r\n        margin: 0;\r\n        font-size: 14px;\r\n        color:black;\r\n    }\r\n\r\n.client-details {\r\n    margin: 20px 0;\r\n    text-align: left;\r\n}\r\n\r\n.client-details h3 {\r\n        margin: 5px ;\r\n    }\r\n\r\n.client-details p {\r\n        margin: 5px;\r\n    }\r\n\r\n.invoice-details {\r\n    margin: 20px 0;\r\n    text-align: right;\r\n}\r\n\r\n.invoice-details h3 {\r\n        margin: 5px;\r\n\r\n    }\r\n\r\n.invoice-details p {\r\n        margin: 5px;\r\n    }\r\n\r\n.invoice-table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.invoice-table th,\r\n    .invoice-table td {\r\n        border: 1px solid black;\r\n        padding: 10px;\r\n    }\r\n\r\n.invoice-table th {\r\n        background-color: lightgray;\r\n        text-align: left;\r\n    }\r\n\r\n.total {\r\n    margin: 20px 0;\r\n    text-align: right;\r\n}\r\n\r\n.total h3 {\r\n        margin: 5;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLWludm9pY2VzL2FsbC1pbnZvaWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVJO1FBQ0ksU0FBUztJQUNiOztBQUVBO1FBQ0ksU0FBUztRQUNULGVBQWU7UUFDZixXQUFXO0lBQ2Y7O0FBRUo7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVJO1FBQ0ksWUFBWTtJQUNoQjs7QUFFQTtRQUNJLFdBQVc7SUFDZjs7QUFFSjtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUk7UUFDSSxXQUFXOztJQUVmOztBQUNBO1FBQ0ksV0FBVztJQUNmOztBQUVKO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFSTs7UUFFSSx1QkFBdUI7UUFDdkIsYUFBYTtJQUNqQjs7QUFFQTtRQUNJLDJCQUEyQjtRQUMzQixnQkFBZ0I7SUFDcEI7O0FBRUo7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVJO1FBQ0ksU0FBUztJQUNiIiwiZmlsZSI6InNyYy9hcHAvYWxsLWludm9pY2VzL2FsbC1pbnZvaWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludm9pY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgICAuaGVhZGVyIGgxIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuXHJcbi5jbGllbnQtZGV0YWlscyB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiAgICAuY2xpZW50LWRldGFpbHMgaDMge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDtcclxuICAgIH1cclxuXHJcbiAgICAuY2xpZW50LWRldGFpbHMgcCB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcblxyXG4uaW52b2ljZS1kZXRhaWxzIHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbiAgICAuaW52b2ljZS1kZXRhaWxzIGgzIHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICB9XHJcbiAgICAuaW52b2ljZS1kZXRhaWxzIHAge1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG5cclxuLmludm9pY2UtdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4gICAgLmludm9pY2UtdGFibGUgdGgsXHJcbiAgICAuaW52b2ljZS10YWJsZSB0ZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW52b2ljZS10YWJsZSB0aCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4udG90YWwge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuICAgIC50b3RhbCBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiA1O1xyXG4gICAgfVxyXG4iXX0= */");

/***/ }),

/***/ "emN6":
/*!**************************************************************!*\
  !*** ./src/app/membership-plan/membership-plan.component.ts ***!
  \**************************************************************/
/*! exports provided: MembershipPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipPlanComponent", function() { return MembershipPlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_membership_plan_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./membership-plan.component.html */ "agtz");
/* harmony import */ var _membership_plan_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./membership-plan.component.css */ "aX6C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../btn-cell-renderer/btn-cell-renderer.component */ "5oOU");








let MembershipPlanComponent = class MembershipPlanComponent {
    constructor(gymServices, _router) {
        this.gymServices = gymServices;
        this._router = _router;
        this.frameworkComponents = {
            buttonRenderer: _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_7__["BtnCellRendererComponent"],
        };
        this.columnDefs = [
            {
                headerName: 'Name',
                field: 'MbrShipName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Amount',
                field: 'MbrShipAmt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Days',
                field: 'MbrShipDurationInDays',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Start Date',
                field: 'StartDt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'End Date',
                field: 'EndDt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Description',
                field: 'Description',
                Filter: true,
                enableSorting: true,
                sortable: true
            },
            {
                headerName: 'Active/In-Active',
                field: 'Active',
                Filter: true,
                enableSorting: true,
                sortable: true,
                valueGetter: function (params) {
                    if (params.data.Active == true) {
                        return "Active";
                    }
                    else {
                        return "In-Active";
                    }
                },
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Action',
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onBtnClick.bind(this),
                    OnDelete: this.OnDeletePlan.bind(this),
                }
            },
        ];
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
    }
    onBtnClick(e) {
        if (e == undefined)
            return this._router.navigate(["/AddMbrPlans"]);
        else
            return this._router.navigate(["/AddMbrPlans"], { queryParams: e.rowData });
    }
    onGridReady(params) {
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetAllMemberShipPlan().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                dataValue = result;
                params.api.setRowData(dataValue);
            }
            else {
                dataValue = "No Data Available";
                params.api.setRowData(dataValue);
            }
        }, error => alert(error.message));
    }
    OnDeletePlan(mbrId) {
        this.gymServices.DeletePlan(mbrId).subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(result)) {
                alert('Member Deleted Successfully !');
                return this._router.navigate(["/Employee"]);
            }
            else {
                alert("Error !");
            }
        }, error => alert(error.message));
    }
};
MembershipPlanComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
MembershipPlanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-membership-plan',
        template: _raw_loader_membership_plan_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_membership_plan_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], MembershipPlanComponent);



/***/ }),

/***/ "fkBw":
/*!***************************************************************************!*\
  !*** ./src/app/add-remaining-balance/add-remaining-balance.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1yZW1haW5pbmctYmFsYW5jZS9hZGQtcmVtYWluaW5nLWJhbGFuY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "g7Hf":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-employee/add-employee.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{modelheaderval}}</h4>\r\n        <hr />\r\n\r\n        <form [formGroup]=\"AddEmpForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrId\" formControlName=\"MbrId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrUserId\" formControlName=\"MbrUserId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrShipId\" formControlName=\"MbrShipId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"sal_Id\" formControlName=\"sal_Id\" style=\"display:none\">\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Members Type</label>\r\n                    <select class=\"form-control\" (change)=\"filterForeCasts($event.target.value)\" [(ngModel)]=\"MbrTypeddl\" formControlName=\"MbrType\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrType.errors }\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                        <option value=\"Enquiry\">Enquiry</option>\r\n                        <option value=\"GymMember\">Gym Member</option>\r\n                        <option value=\"Trainer\">Trainer</option>\r\n                        <option value=\"FloorManager\">Floor Manager</option>\r\n                        <option value=\"Receptionist\">Receptionist</option>\r\n                        <option value=\"officeboy\">office boy</option>\r\n                        <!--<option value=\"PT\">PT</option>-->\r\n                    </select>\r\n                    <div *ngIf=\"submitted && fval.MbrType.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.MbrType.errors.required\">\r\n                            Members Type is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"MbrTypeddl != 'PT'\">\r\n                <hr />\r\n                <div class=\"form-row \">\r\n                    <h5 class=\"mb-2\">Personal Information</h5>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"name\"> Name</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrName\" formControlName=\"MbrName\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrName.errors }\">\r\n                        <div *ngIf=\"submitted && fval.MbrName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.MbrName.errors.required\">\r\n                                Full Name is required and must be a valid name\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Gender</label>\r\n\r\n                        <select formControlName=\"MbrGender\" [(ngModel)]=\"MbrGender\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrGender.errors }\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                            <option value=\"Male\">Male</option>\r\n                            <option value=\"FeMale\">FeMale</option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && fval.MbrGender.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.MbrGender.errors.required\">\r\n                                Gender is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> DOB</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrDOB\" formControlName=\"MbrDOB\" (change)=\"onDOBSelect($event)\">\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Mobile</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrMob\" formControlName=\"MbrMob\" (keypress)=\"numberOnly($event)\" maxlength=\"10\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrMob.errors }\">\r\n                        <div *ngIf=\"submitted && fval.MbrMob.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.MbrMob.errors.required || fval.MbrMob.errors.maxlength || fval.MbrMob.errors.minlength\">\r\n                                Mobile No is required\r\n                            </div> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Mobile 2</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrMob2\" formControlName=\"MbrMob2\" (keypress)=\"numberOnly($event)\" maxlength=\"10\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Email</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrEmail\" formControlName=\"MbrEmail\">\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-row\">\r\n\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Address</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrAddr\" formControlName=\"MbrAddr\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> City</label>\r\n                        <select formControlName=\"MbrCity\" [(ngModel)]=\"MbrCityddl\" class=\"form-control\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                            <option value=\"Pune\">Pune</option>\r\n                            <option value=\"Mumbai\">Mumbai</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> State</label>\r\n                        <select formControlName=\"MbrState\" [(ngModel)]=\"MbrStateddl\" class=\"form-control\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                            <option value=\"Maharastra\">Maharastra</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-row\">\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Pincode</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"MbrPincode\" [(ngModel)]=\"MbrPincode\" (keypress)=\"numberOnly($event)\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Enquiry Date </label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrDOE\" formControlName=\"MbrDOE\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Description</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"GeneralDesc\" [(ngModel)]=\"GeneralDesc\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <div *ngIf=\"MbrTypeddl == 'Trainer' || MbrTypeddl == 'FloorManager'\">\r\n                            <label> PT Charges </label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"MbrPTCharges\" [(ngModel)]=\"MbrPTCharges\" (keypress)=\"numberOnly($event)\">\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div *ngIf=\"MbrTypeddl != 'GymMember' && MbrTypeddl != 'PT' && MbrTypeddl != 'Enquiry'\">\r\n                <hr />\r\n                <div class=\"form-row \">\r\n                    <h5 class=\"mb-2\">Salary Information</h5>\r\n                </div>\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Salary</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"MbrSalary\" [(ngModel)]=\"MbrSalary\" (keypress)=\"numberOnly($event)\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Description</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"SalDesc\" [(ngModel)]=\"SalDesc\">\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"MbrTypeddl == 'Trainer' || MbrTypeddl == 'FloorManager'\">\r\n\r\n                <div class=\"form-row\">\r\n                    <h5 class=\"mb-2\">Certification Details</h5>\r\n                </div>\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Certification Name</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrCertification\" formControlName=\"MbrCertification\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Completion Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrCertificationDt\" formControlName=\"MbrCertificationDt\" name=\"MbrshipStartDt\">\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"MbrTypeddl == 'GymMember' ||MbrTypeddl == 'Trainer' || MbrTypeddl == 'FloorManager'\">\r\n                <hr />\r\n                <div class=\"form-row \">\r\n                    <h5 class=\"mb-2\">MemberShip Plan</h5>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Plan Name</label>\r\n\r\n                        <select formControlName=\"MbrPlans\" [(ngModel)]=\"MbrPlansddl\" class=\"form-control\" (change)=\"showMemberShipPlan($event.target.value)\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                            <option *ngFor=\"let plan of _MbrPlans\" value={{plan.MbrShipId}}>\r\n                                {{plan.MbrShipName}} -({{plan.MbrShipDurationInDays}})\r\n                            </option>\r\n                        </select>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrshipAmt\" formControlName=\"MbrshipAmt\" disabled>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Paid Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"MbrshipPaidAmt\" [(ngModel)]=\"MbrshipPaidAmt\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Remaining Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"RemBalance\" [(ngModel)]=\"RemBalance\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>MemberShip Days</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrshipDays\" formControlName=\"MbrshipDays\" disabled>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Start Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" (change)=\"onDateChange($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrshipStartDt\" formControlName=\"MbrshipStartDt\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> End Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrshipEndDt\" formControlName=\"MbrshipEndDt\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid By</label>\r\n                        <select class=\"form-control\" formControlName=\"MbrPaidBy\" [(ngModel)]=\"MbrPaidByddl\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                            <option value=\"Cash\">Cash</option>\r\n                            <option value=\"Card\">Card</option>\r\n                            <option value=\"Gpay\">Gpay</option>\r\n                            <option value=\"PhonePay\">PhonePay</option>\r\n\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" (change)=\"onDateChange($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"PaidDt\" formControlName=\"PaidDt\">\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Description</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"MbrshipDesc\" [(ngModel)]=\"MbrshipDesc\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Batch</label>\r\n                        <select class=\"form-control\" formControlName=\"MbrBatch\" [(ngModel)]=\"MbrBatch\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                            <option value=\"Morning\">Morning</option>\r\n                            <option value=\"Afternoon\">Afternoon</option>\r\n                            <option value=\"Evening\">Evening</option>\r\n\r\n                        </select>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"MbrTypeddl == 'GymMember' || MbrTypeddl == 'PT'\" style=\"display:none\">\r\n                <!--hide for time bin-->\r\n                <hr />\r\n                <div class=\"form-row \">\r\n                    <h5 class=\"mb-2\">Personal Training Plan</h5>\r\n                </div>\r\n                <div *ngIf=\"MbrTypeddl == 'PT'\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label>Select Member</label>\r\n                            <select formControlName=\"PtMemberId\" [(ngModel)]=\"PtMemberId\" class=\"form-control\" (change)=\"showPersonalTrainingPlans($event.target.value)\">\r\n                                <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                                <option *ngFor=\"let mbr of _PTMembers\" value={{mbr.MbrId}}>\r\n                                    {{mbr.MbrName}}\r\n                                </option>\r\n                            </select>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>PT Traning Plan</label>\r\n                        <select formControlName=\"MbrPTPlanId\" [(ngModel)]=\"MbrPTPlanId\" class=\"form-control\" (change)=\"showPersonalTrainingPlans($event.target.value)\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                            <option *ngFor=\"let plan of _MbrPlans\" value={{plan.MbrShipId}}>\r\n                                {{plan.MbrShipName}} -({{plan.MbrShipDurationInDays}})\r\n                            </option>\r\n                        </select>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Training Days</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrPtDays\" formControlName=\"MbrPtDays\" disabled>\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>PT Trainer Name</label>\r\n                        <select formControlName=\"MbrPtTrainerId\" [(ngModel)]=\"MbrPtTrainerId\" class=\"form-control\" (change)=\"showPTTrainerCharges($event.target.value)\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                            <option *ngFor=\"let plan of _PTTrainer\" value={{plan.MbrId}}>\r\n                                {{plan.MbrName}}\r\n                            </option>\r\n                        </select>\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>PT Charges</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrPTChargesofTrainer\" formControlName=\"MbrPTChargesofTrainer\" disabled>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Paid Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"MbrPTAmt\" [(ngModel)]=\"MbrPTAmt\">\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid By</label>\r\n                        <select class=\"form-control\" formControlName=\"MbrPTAmtPaidBy\" [(ngModel)]=\"MbrPTAmtPaidBy\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                            <option value=\"Cash\">Cash</option>\r\n                            <option value=\"Card\">Card</option>\r\n                            <option value=\"Gpay\">Gpay</option>\r\n                            <option value=\"PhonePay\">PhonePay</option>\r\n\r\n                        </select>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Start Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrPTStartDt\" formControlName=\"MbrPTStartDt\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> End Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrPTEndDt\" formControlName=\"MbrPTEndDt\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Description</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"MbrPTDesc\" [(ngModel)]=\"MbrPTDesc\">\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <!--<input type=\"submit\" class=\"fadeIn fourth\" value=\"Add\">-->\r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"{{btnVal}}\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "g9dR":
/*!****************************************************************!*\
  !*** ./src/app/renewal-payments/renewal-payments.component.ts ***!
  \****************************************************************/
/*! exports provided: RenewalPaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalPaymentsComponent", function() { return RenewalPaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_renewal_payments_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./renewal-payments.component.html */ "9Rxj");
/* harmony import */ var _renewal_payments_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renewal-payments.component.css */ "8MQA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









let RenewalPaymentsComponent = class RenewalPaymentsComponent {
    constructor(gymServices, formBuilder, _router, route, datepipe) {
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.route = route;
        this.datepipe = datepipe;
        this._MbrPlans = [];
        this.submitted = false;
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
        this.GetAllMemberShipPlan();
        this.RenewalPaymentForm = this.formBuilder.group({
            MbrId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrBatch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrShipId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrShipCharges: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Days: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PaidAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PaidBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PaidDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrshipStartDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrshipEndDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MembershipType: [''],
        });
        this.route.queryParams.subscribe((params) => {
            debugger;
            if (params != null && params.MbrName != undefined) {
                this.MbrId = params.MbrId;
                this.MbrName = params.MbrName;
                this.MbrBatch = params.MbrBatch;
                this.MbrName = params.MbrName;
            }
        });
    }
    onDateChange(value) {
        this.date = new Date(value.srcElement.value);
        this.date.setDate(this.date.getDate() + +this.Days);
        this.MbrshipEndDt = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    }
    onSubmit() {
        this.submitted = true;
        if (!this.RenewalPaymentForm.invalid) {
            this.RenewalPaymentForm.value["MembershipType"] = "GymMembership";
            this.gymServices.AddPTMembers(this.RenewalPaymentForm.value).subscribe(result => {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                    alert(result);
                    return this._router.navigate(["/RenewalMembership"]);
                }
                else {
                    alert("Incorrect Creiditials");
                }
            }, error => alert(error.message));
        }
    }
    onCancel() {
        return this._router.navigate(["/RenewalMembership"]);
    }
    get fval() {
        return this.RenewalPaymentForm.controls;
    }
    GetAllMemberShipPlan() {
        this.gymServices.GetAllMemberShipPlan().subscribe(res => {
            this._MbrPlans = res;
            // data contains actual array of users
        }, error => alert(error.message));
    }
    showMemberShipPlan(value) {
        this.MbrShipCharges = this._MbrPlans.find(x => x.MbrShipId == value).MbrShipAmt.toString();
        this.Days = this._MbrPlans.find(x => x.MbrShipId == value).MbrShipDurationInDays.toString();
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
        }
        return true;
    }
};
RenewalPaymentsComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }
];
RenewalPaymentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-renewal-payments',
        template: _raw_loader_renewal_payments_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_renewal_payments_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
], RenewalPaymentsComponent);



/***/ }),

/***/ "hesN":
/*!*********************************************************!*\
  !*** ./src/app/send-message/send-message.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbmQtbWVzc2FnZS9zZW5kLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "hfG8":
/*!*******************************************************************!*\
  !*** ./src/app/confirm-equal-validator.directive.ts.directive.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmEqualValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEqualValidatorDirective", function() { return ConfirmEqualValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var ConfirmEqualValidatorDirective_1;



let ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = class ConfirmEqualValidatorDirective {
    validate(control) {
        const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    }
};
ConfirmEqualValidatorDirective.propDecorators = {
    appConfirmEqualValidator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
        selector: '[appConfirmEqualValidator]',
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                useExisting: ConfirmEqualValidatorDirective_1,
                multi: true
            }]
    })
], ConfirmEqualValidatorDirective);



/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-image\">\r\n    <div class=\"loginFormDesign d-flex align-items-center justify-content-center \">\r\n        <div class=\"wrapper fadeInDown m-0\">\r\n            <div class=\"card m-0\">\r\n                <form [formGroup]=\"loginform\" (ngSubmit)=\"onSubmit()\" action=\"#\" class=\"d-flex flex-column\">\r\n                    <div class=\"h3 text-center text-white\">Login</div>\r\n                    <div class=\"d-flex align-items-center input-field my-3 mb-4\">\r\n                        <span class=\"far fa-user p-2\"></span>\r\n                        <input type=\"text\" formControlName=\"MobileNo\" [(ngModel)]=\"MobileNo\"  placeholder=\"Mobile Number\" required class=\"form-control\" maxlength=\"10\" (keypress)=\"numberOnly($event)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MobileNo.errors }\">\r\n                        <div *ngIf=\"submitted && fval.MobileNo.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.MobileNo.errors.required || fval.MobileNo.errors.maxlength || fval.MobileNo.errors.minlength\">\r\n                                Mobile No is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex align-items-center input-field mb-4\">\r\n                        <span class=\"fas fa-lock p-2\"></span>\r\n                        <input type=\"password\" formControlName=\"password\" placeholder=\"Password\" required class=\"form-control\" id=\"pwd\" maxlength=\"5\">\r\n                    </div>\r\n                    <div class=\"d-sm-flex align-items-sm-center justify-content-sm-between\">\r\n                        <div class=\"d-flex align-items-center\"> <!--<label class=\"option\"><input type=\"checkbox\" checked> <span class=\"checkmark\"></span> </label>--> </div>\r\n                        <div class=\"mt-sm-0 mt-3\"><a href=\"#\">Forgot password?</a></div>\r\n                    </div>\r\n                    <div> <input type=\"submit\" value=\"Login\" class=\"btn btn-primary\"> </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "kgRn":
/*!**********************************************************!*\
  !*** ./src/app/salary-master/salary-master.component.ts ***!
  \**********************************************************/
/*! exports provided: SalaryMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryMasterComponent", function() { return SalaryMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_salary_master_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./salary-master.component.html */ "kwhI");
/* harmony import */ var _salary_master_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salary-master.component.css */ "zlKe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../btn-cell-renderer/btn-cell-renderer.component */ "5oOU");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");









let SalaryMasterComponent = class SalaryMasterComponent {
    constructor(gymServices, _router, route, formBuilder) {
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.formBuilder = formBuilder;
        this._Members = [];
        this.isShown = false; // hidden by default
        this.frameworkComponents = {
            buttonRenderer: _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_7__["BtnCellRendererComponent"],
        };
        this.columnDefs = [
            {
                headerName: 'Id',
                field: 'MbrId',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
            },
            {
                headerName: 'SalMst_Id',
                field: 'SalMst_Id',
                Filter: true,
                enableSorting: true,
                sortable: true,
                hide: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'MbrName',
                field: 'MbrName',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'MbrType',
                field: 'MbrType',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'SalMonth',
                field: 'SalMonth',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'SalPaidDt',
                field: 'SalPaidDt',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'TotalSal',
                field: 'TotalSal',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'PaidSal',
                field: 'PaidSal',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'TotalLeaves',
                field: 'TotalLeaves',
                Filter: true,
                enableSorting: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Comment',
                field: 'Comment',
                filter: 'agTextColumnFilter'
            },
            {
                headerName: 'Action',
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onBtnClick.bind(this),
                    OnDelete: this.OnDeleteSalaryMst.bind(this),
                }
            },
        ];
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
        this.SalaryDetailsForm = this.formBuilder.group({
            chkMbr: ['',],
            MemberId: ['',],
        });
    }
    AddSalary() {
        return this._router.navigate(["/AddSalary"]);
    }
    onBtnClick(e) {
        /*alert(e.rowData);   */
        return this._router.navigate(["/AddSalary"], { queryParams: e.rowData });
    }
    onGridReady(params) {
        debugger;
        params.api.sizeColumnsToFit();
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let dataValue;
        this.gymServices.GetSalaryMstList().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                dataValue = result;
                params.api.setRowData(dataValue);
            }
            else {
                dataValue = "";
                params.api.setRowData(dataValue);
            }
        }, error => alert(error.message));
    }
    OnDeleteSalaryMst(data) {
        this.gymServices.DeleteMembersSalaryMst(data.SalMst_Id).subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                alert('Deleted Successfully !');
                this.gymServices.GetSalaryMstList().subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                        this.rowData = result;
                    }
                    else {
                        this.rowData = "";
                    }
                }, error => alert(error.message));
            }
            else {
                alert("Error !");
            }
        }, error => alert(error.message));
    }
    changed(evt) {
        this.rowData = null;
        if (evt.target.checked) {
            this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrType'], false);
            this.GetAllMembers();
            this.isShown = true;
        }
        else {
            this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrType'], true);
            this.GetSalaryMst();
            this.isShown = false;
        }
    }
    GetSalaryMst() {
        this.gymServices.GetSalaryMstList().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                this.rowData = result;
            }
            else {
                this.rowData = null;
            }
        }, error => alert(error.message));
    }
    GetSalaryMstByMbr(value) {
        this.gymServices.GetSalaryMstListByMbr(value).subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                this.rowData = result;
            }
            else {
                this.rowData = '';
            }
        }, error => alert(error.message));
    }
    GetAllMembers() {
        debugger;
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                this._Members = result.filter(x => x.MbrType != "GymMember");
            }
        }, error => alert(error.message));
    }
    changeChk() {
        if (this.chkMbr)
            this.chkMbr = false;
        else
            this.chkMbr = true;
        this.rowData = null;
        if (this.chkMbr) {
            this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrType'], false);
            this.GetAllMembers();
            this.isShown = true;
        }
        else {
            this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrType'], true);
            this.GetSalaryMst();
            this.isShown = false;
        }
    }
};
SalaryMasterComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_8__["GymService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
SalaryMasterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-salary-master',
        template: _raw_loader_salary_master_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_salary_master_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_8__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], SalaryMasterComponent);



/***/ }),

/***/ "kwhI":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salary-master/salary-master.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n        <form [formGroup]=\"SalaryDetailsForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div style=\"margin-bottom: 15px;\" class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"chkMbr\" formControlName=\"chkMbr\" id=\"chkMbr\" name=\"chkMbr\" (change)=\"changed($event)\">\r\n                <label  class=\"form-check-label\"   (click)=\"changeChk()\">Show By Member</label>\r\n            </div>\r\n\r\n            <div *ngIf=\"isShown\" class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Select Member</label>\r\n                    <select formControlName=\"MemberId\" [(ngModel)]=\"MemberId\" class=\"form-control\" (change)=\"GetSalaryMstByMbr($event.target.value)\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                        <option *ngFor=\"let mbr of _Members\" value={{mbr.MbrId}}>\r\n                            {{mbr.MbrName}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div style=\"margin-bottom:5px;\">\r\n                <button class=\"btn-info\" (click)=\"AddSalary()\">Add Salary Details</button>\r\n            </div>\r\n            <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                             class=\"ag-theme-alpine\"\r\n                             [columnDefs]=\"columnDefs\"\r\n                             (gridReady)=\"onGridReady($event)\"\r\n                             [frameworkComponents]=\"frameworkComponents\"\r\n                             [animateRows]=\"true\"\r\n                             [rowData]=\"rowData\"\r\n                             pagination=\"true\"\r\n                             paginationPageSize=\"20\">\r\n            </ag-grid-angular>\r\n        </form>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "kx9X":
/*!***********************************************!*\
  !*** ./src/app/support/support.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "mkfr":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/renewal-membership/renewal-membership.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n     <h3>Renewal Membership</h3>\r\n    <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                     class=\"ag-theme-alpine\"\r\n                     [columnDefs]=\"columnDefs\"\r\n                     (gridReady)=\"onGridReady($event)\"\r\n                     [frameworkComponents]=\"frameworkComponents\"\r\n                     [animateRows]=\"true\"\r\n                     pagination=\"true\"\r\n                     (rowClicked)='onRowClicked($event)'\r\n                     paginationPageSize=\"20\">\r\n    </ag-grid-angular>\r\n</div>\r\n ");

/***/ }),

/***/ "n6vJ":
/*!****************************************************!*\
  !*** ./src/app/add-salary/add-salary.component.ts ***!
  \****************************************************/
/*! exports provided: AddSalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSalaryComponent", function() { return AddSalaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_salary_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-salary.component.html */ "bHPt");
/* harmony import */ var _add_salary_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-salary.component.css */ "yj/R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");








let AddSalaryComponent = class AddSalaryComponent {
    constructor(gymServices, formBuilder, _router, route) {
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.route = route;
        this._SalMembers = [];
        this.submitted = false;
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
        this.btnVal = 'Save';
        this.modelheaderval = 'Add PT Member';
        this.AddSalaryForm = this.formBuilder.group({
            MbrId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrDesignation: ['',],
            SalMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            SalPaidDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            TotalSal: ['',],
            PaidSal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            TotalLeaves: [''],
            Comment: ['',],
        });
        this.route.queryParams.subscribe((params) => {
            if (params != null && params.MbrName != undefined) {
                this.MbrId = params.MbrId;
                this.MbrDesignation = params.MbrDesignation;
                this.SalMonth = params.SalMonth;
                this.SalPaidDt = params.SalPaidDt;
                this.TotalSal = params.TotalSal;
                this.PaidSal = params.PaidSal;
                this.TotalLeaves = params.TotalLeaves;
                this.Comment = params.Comment;
                this.btnVal = 'update';
                this.modelheaderval = 'Update Member';
            }
        });
        this.GetAllMembers();
    }
    get fval() {
        return this.AddSalaryForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (!this.AddSalaryForm.invalid) {
            if (this.btnVal == "Save") {
                debugger;
                this.gymServices.SaveSalaryMst(this.AddSalaryForm.value).subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                        alert(result);
                        return this._router.navigate(["/AddSalary"]);
                    }
                }, error => alert(error.message));
            }
            else { // Update 
                this.gymServices.UpdateSalaryMst(this.AddSalaryForm.value).subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                        alert(result);
                        return this._router.navigate(["/AddSalary"]);
                    }
                }, error => alert(error.message));
            }
        }
    }
    onCancel() {
        return this._router.navigate(["/SalaryDetails"]);
    }
    GetAllMembers() {
        debugger;
        this.gymServices.GetAllMembers().subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                this._SalMembers = result.filter(x => x.MbrType != "GymMember");
                this.ShowDesignations(this.MbrId);
            }
        }, error => alert(error.message));
    }
    ShowDesignations(value) {
        this.MbrDesignation = this._SalMembers.find(x => x.MbrId == value).MbrType.toString();
        this.TotalSal = this._SalMembers.find(x => x.MbrId == value).MbrSalary.toString();
    }
};
AddSalaryComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_7__["GymService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
AddSalaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-salary',
        template: _raw_loader_add_salary_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_salary_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_7__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], AddSalaryComponent);



/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "ngtg":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n\r\n        <form [formGroup]=\"AppSuportForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n            <h3>Contact Form</h3>\r\n            <hr />\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                     \r\n                </div>\r\n                <div class=\"form-group col-md-4\" style=\"text-align:center\">\r\n                    <h2>Contact Info</h2> <br /><br />\r\n                    <label style=\"color:gray\">Email :- Chetan9258@gmail.com</label> <br />\r\n                    <label style=\"color:gray\">Mobile No:- 9021790408</label> \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Your Name</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"SupportName\" [(ngModel)]=\"SupportName\" [ngClass]=\"{ 'is-invalid': submitted && fval.SupportName.errors }\">\r\n                    <div *ngIf=\"submitted && fval.SupportName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.SupportName.errors.required\">\r\n                            Name is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Your Email/ Contact No</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"SupportContact\" [(ngModel)]=\"SupportContact\" [ngClass]=\"{ 'is-invalid': submitted && fval.SupportContact.errors }\">\r\n                    <div *ngIf=\"submitted && fval.SupportContact.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.SupportContact.errors.required\">\r\n                            Email/ Contact No is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Select Subject</label>\r\n                    <select formControlName=\"SupportSubject\" [(ngModel)]=\"SupportSubject\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.SupportSubject.errors }\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option value=\"2021\">Web Loading Issue</option>\r\n                        <option value=\"2023\">Gym Members Issue</option>\r\n                        <option value=\"2022\">Report Issue</option>\r\n                        <option value=\"2020\">Others</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && fval.SupportSubject.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.SupportSubject.errors.required\">\r\n                            Subject is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Your Message</label>\r\n                    <textarea formControlName=\"SupportBody\" [(ngModel)]=\"SupportBody\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.SupportBody.errors }\"></textarea>\r\n                    <div *ngIf=\"submitted && fval.SupportBody.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.SupportBody.errors.required\">\r\n                            Your Message is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n               \r\n            </div>\r\n            <input type=\"submit\" class=\"fadeIn fourth\">\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "onyv":
/*!****************************************************************!*\
  !*** ./src/app/add-gym-branches/add-gym-branches.component.ts ***!
  \****************************************************************/
/*! exports provided: AddGymBranchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGymBranchesComponent", function() { return AddGymBranchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_gym_branches_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-gym-branches.component.html */ "dJGj");
/* harmony import */ var _add_gym_branches_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-gym-branches.component.css */ "7gTp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AddGymBranchesComponent = class AddGymBranchesComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddGymBranchesComponent.ctorParameters = () => [];
AddGymBranchesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-gym-branches',
        template: _raw_loader_add_gym_branches_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_gym_branches_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AddGymBranchesComponent);



/***/ }),

/***/ "qDRS":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remaining-balance/remaining-balance.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n         \r\n        <h3>Remaining Balances</h3>\r\n        <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                         class=\"ag-theme-alpine\"\r\n                         [columnDefs]=\"columnDefs\"\r\n                         (gridReady)=\"onGridReady($event)\"\r\n                         [frameworkComponents]=\"frameworkComponents\"\r\n                         [animateRows]=\"true\"\r\n                         pagination=\"true\"\r\n                         paginationPageSize=\"20\">\r\n        </ag-grid-angular>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "re+X":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payments/payments.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n         <label>Members Payment</label>\r\n        <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                         class=\"ag-theme-alpine\"\r\n                         [columnDefs]=\"columnDefs\"\r\n                         (gridReady)=\"onGridReady($event)\" \r\n                         [animateRows]=\"true\"\r\n                         pagination=\"true\"\r\n                         paginationPageSize=\"20\">\r\n        </ag-grid-angular>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "tiet":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/send-message/send-message.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Send Message</h4>\r\n\r\n        <form [formGroup]=\"SendMsgForm\" action=\"#\" (ngSubmit)=\"onSubmit()\">\r\n             \r\n            <div>\r\n                <hr />\r\n                <div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label>Select Member's Type'</label>\r\n                            <select formControlName=\"MbrType\" [(ngModel)]=\"MbrType\" class=\"form-control\" (change)=\"showPersonalTrainingPlans($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrType.errors }\">\r\n                                <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                                <option>Gym Members</option>\r\n                                <option>PT Members</option>\r\n                                <option>Trainers</option>\r\n                                <option>Managers</option>\r\n                            </select>\r\n                            <div *ngIf=\"submitted && fval.MbrType.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"fval.MbrType.errors.required\">\r\n                                    Member Types is required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label>Select Member</label>\r\n                            <ng-multiselect-dropdown [placeholder]=\"'Select Members'\"\r\n                                                     [settings]=\"dropdownSettings\"\r\n                                                     [data]=\"_Members\"\r\n                                                     [(ngModel)]=\"MbrId\"\r\n                                                     (onSelect)=\"onItemSelect($event)\"\r\n                                                     (onSelectAll)=\"onSelectAll($event)\">\r\n                            </ng-multiselect-dropdown>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n           \r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Your Message</label>\r\n                        <textarea formControlName=\"MbrMessage\" [(ngModel)]=\"MbrMessage\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrMessages.errors }\"></textarea>\r\n                        <div *ngIf=\"submitted && fval.MbrMessage.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.MbrMessage.errors.required\">\r\n                                Your Message is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <!--<input type=\"submit\" class=\"fadeIn fourth\" value=\"Add\">-->\r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"Submit\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "v6BH":
/*!*****************************************!*\
  !*** ./src/app/services/gym.service.ts ***!
  \*****************************************/
/*! exports provided: GymService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymService", function() { return GymService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../..//environments/environment */ "AytR");






let GymService = class GymService {
    constructor(http) {
        this.http = http;
    }
    SendFeedbackEmail() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/SendFeebackEmail', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    SendPromotionMessage(_membersList) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/SendPromotionMessage?membersLists=' + _membersList + '', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    login(username, password) {
        const headers = {
            'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
        };
        const userData = "username=" + username + "&password=" + password + "&grant_type=password";
        /*return this.http.post<Token>(baseUrl + 'Token', userData, { 'headers': headers }).pipe(map(data => data));*/
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'Token', userData, { 'headers': headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
    }
    ForgotPassword(Email) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Common/forgotPassword?Email=' + Email + '', { 'headers': this.getToken() });
    }
    Logout() {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Account/Logout', { 'headers': this.getToken() });
    }
    UpdatePassowrd(model) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Account/ChangePassword', JSON.stringify(model), { 'headers': this.getToken() });
    }
    CheckToken() {
        if (localStorage.getItem('token') == null) {
            return false;
        }
        else
            return true;
    }
    VerifyOTP(_OTPValue) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Common/VerifyOTP?OTPValue=' + _OTPValue + '', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    getToken() {
        return {
            'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') + ''
        };
    }
    /** Error Handling method */
    errorHandler(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error('Backend returned code ' + error.status + ',' +
                'body was: ' + error.error.message + '');
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    }
    //------------------------ Employee --------------------
    GetAllMembers() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/GetAllMembers', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    GetMemberDetailsById(_UserId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/GetMemberDetails?UserId=' + _UserId + '', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    AddMembers(_Emp) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/CreateMember', JSON.stringify(_Emp), { 'headers': this.getToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    UpdateMember(_Emp) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/UpdateMember', JSON.stringify(_Emp), { 'headers': this.getToken() });
    }
    DeleteMember(_EmpId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/DeleteMember?UserId=' + _EmpId + '', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    //------------------------ End Employee --------------------
    GetAllMemberShipPlan() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/GetAllMemberShipPlan', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    AddPlan(_Plan) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/CreateMemberShipPlan', JSON.stringify(_Plan), { 'headers': this.getToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    UpdatePlan(_Plan) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/UpdateMemberShipPlan', JSON.stringify(_Plan), { 'headers': this.getToken() });
    }
    DeletePlan(_PlanId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/DeleteMembershipPlan?PlanId=' + _PlanId + '', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    GetPaymentDetails() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/GetGymPaymentDetails', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    GetDashboardData() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/GetDashboardData', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    GetUpcomingBirthdays() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/GetUpcomingBirthdays', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    // ------------------------ Expenses Details -----------------
    GetAllExpense() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/GetAllExpense', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    CreateExpense(_Expenses) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/CreateExpense', JSON.stringify(_Expenses), { 'headers': this.getToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    UpdateExpense(_Expenses) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/UpdateExpense', JSON.stringify(_Expenses), { 'headers': this.getToken() });
    }
    DeleteExpense(_expenseId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/DeleteExpense?expenseId=' + _expenseId + '', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    //------------------------ Personal Training --------------------
    GetAllPTMembers() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/GetAllPtMembers', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    AddPTMembers(_Emp) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/CreateMemberShipPlanUser', JSON.stringify(_Emp), { 'headers': this.getToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    UpdatePTMembers(_Emp) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/UpdateMemberShipPlanUser', JSON.stringify(_Emp), { 'headers': this.getToken() });
    }
    DeletePTMembers(_MbrUserId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/DeleteMembershipPlan?MbrUserId=' + _MbrUserId + '', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    //------------------------ End Employee --------------------
    //------------------------ Gym Profile Details --------------------
    GetGymProfileDetails() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/GetGymProfile', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    UpdateGymProfileDetails(_profile) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymDetails/UpdateGymProfile', JSON.stringify(_profile), { 'headers': this.getToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    //------------------------ End Gym Profile Details  --------------------
    GetMembershipGoingtoExxpiredMembers() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/GetMembershipGoingtoExxpiredMembers', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    GetAllMemberShipPlanUser() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/GetGymMemberRemainingBalance', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    GetGymMemberHistoryById(MemberId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/GetGymMemberHistoryById?MemberId=' + MemberId + '', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    GetInvoiceList(MbrId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/GetInvoiceList?MbrId=' + MbrId + '', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    GetInvoice(MbrUserId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/GetInvoice?MbrUserId=' + MbrUserId + '', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    GetMemberYearlyReport(_MbrId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymReport/GetMemberYearlyReport?MbrId=' + _MbrId + '', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    GetMembershipReport() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymReport/GetMembershipReport', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    GetPTReport() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymReport/GetPTReport', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    GetSummaryReport() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/GymReport/GetSummaryReport', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    GetSalaryMstList() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/GetSalaryMstList', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    GetSalaryMstListByMbr(MbrId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/GetSalaryMstListByMbr?MbrId=' + MbrId + '', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    SaveSalaryMst(_Emp) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/SaveSalaryMst', JSON.stringify(_Emp), { 'headers': this.getToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    UpdateSalaryMst(_Emp) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/UpdateSalaryMst', JSON.stringify(_Emp), { 'headers': this.getToken() });
    }
    DeleteMembersSalaryMst(_SalId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'api/Member/DeleteMembersSalaryMst?_SalId=' + _SalId + '', { 'headers': this.getToken() }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
};
GymService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GymService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GymService);



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "n7sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let LoginComponent = class LoginComponent {
    constructor(gymServices, formBuilder, _router) {
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
    } /*, public nav: NavMenuComponent*/
    ngOnInit() {
        this.loginform = this.formBuilder.group({
            MobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    onSubmit() {
        if (this.loginform.controls.MobileNo.value == undefined || this.loginform.controls.MobileNo.value.length != 10) {
            alert("Please provide valid 10 digit number");
            return;
        }
        if (this.loginform.controls.password.value == undefined || this.loginform.controls.password.value.length != 5) {
            alert("Invalid password");
            return;
        }
        this.gymServices.login(this.loginform.controls.MobileNo.value, this.loginform.controls.password.value).subscribe(result => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result.access_token)) {
                localStorage.setItem("token", result.access_token);
                localStorage.setItem("isAdmin", 'false');
                return this._router.navigate(["/Home"]);
            }
        }, error => alert(error.message));
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
        }
        return true;
    }
    get fval() {
        return this.loginform.controls;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], LoginComponent);



/***/ }),

/***/ "xQ8Y":
/*!**********************************************************************!*\
  !*** ./src/app/add-membership-plan/add-membership-plan.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddMembershipPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMembershipPlanComponent", function() { return AddMembershipPlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_membership_plan_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-membership-plan.component.html */ "HuEp");
/* harmony import */ var _add_membership_plan_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-membership-plan.component.css */ "6zJ6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let AddMembershipPlanComponent = class AddMembershipPlanComponent {
    constructor(gymServices, formBuilder, _router, route) {
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
        this.btnVal = 'Save';
        this.modelheaderval = 'Add Membership Plan';
        this.AddPlanForm = this.formBuilder.group({
            MbrShipId: [''],
            MbrShipName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrShipAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MbrShipDurationInDays: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            StartDt: [''],
            EndDt: [''],
            Description: [''],
        });
        this.route.queryParams.subscribe((params) => {
            if (params != null && params.MbrShipName != undefined) {
                this.MbrShipId = params.MbrShipId;
                this.MbrShipName = params.MbrShipName;
                this.MbrShipAmt = params.MbrShipAmt;
                this.MbrShipDurationInDays = params.MbrShipDurationInDays;
                this.StartDt = params.StartDt;
                this.EndDt = params.EndDt;
                this.Description = params.Description;
                this.btnVal = 'update';
                this.modelheaderval = 'Update Plan';
            }
        });
    }
    onSubmit() {
        this.submitted = true;
        if (!this.AddPlanForm.invalid) {
            if (this.btnVal == "Save") {
                this.gymServices.AddPlan(this.AddPlanForm.value).subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                        alert(result);
                        return this._router.navigate(["/MbrPlans"]);
                    }
                    else {
                        alert("Incorrect Creiditials");
                    }
                }, error => alert(error.message));
            }
            else { // Update 
                this.gymServices.UpdatePlan(this.AddPlanForm.value).subscribe(result => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNull"])(result)) {
                        alert(result);
                        return this._router.navigate(["/MbrPlans"]);
                    }
                    else {
                        alert("Incorrect Creiditials");
                    }
                }, error => alert(error.message));
            }
        }
    }
    onCancel() {
        return this._router.navigate(["/MbrPlans"]);
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
        }
        return true;
    }
    get fval() {
        return this.AddPlanForm.controls;
    }
};
AddMembershipPlanComponent.ctorParameters = () => [
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
AddMembershipPlanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-membership-plan',
        template: _raw_loader_add_membership_plan_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_membership_plan_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], AddMembershipPlanComponent);



/***/ }),

/***/ "y96J":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gym-branches/gym-branches.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n        <button class=\"btn-info\" (click)=\"AddEmployee()\">Add New Branch</button>\r\n        <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                         class=\"ag-theme-alpine\"\r\n                         [columnDefs]=\"columnDefs\"\r\n                         (gridReady)=\"onGridReady($event)\"\r\n                         [frameworkComponents]=\"frameworkComponents\"\r\n                         [animateRows]=\"true\"\r\n                         pagination=\"true\"\r\n                         paginationPageSize=\"20\">\r\n        </ag-grid-angular>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "yj/R":
/*!*****************************************************!*\
  !*** ./src/app/add-salary/add-salary.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zYWxhcnkvYWRkLXNhbGFyeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zdD4":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_support_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./support.component.html */ "ngtg");
/* harmony import */ var _support_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support.component.css */ "kx9X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_gym_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gym.service */ "v6BH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let SupportComponent = class SupportComponent {
    constructor(formBuilder, _router, gymServices) {
        this.formBuilder = formBuilder;
        this._router = _router;
        this.gymServices = gymServices;
        this.submitted = false;
    }
    ngOnInit() {
        this.IsSessionEnable = this.gymServices.CheckToken();
        if (!this.IsSessionEnable)
            return this._router.navigate([""]);
        this.AppSuportForm = this.formBuilder.group({
            SupportName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            SupportContact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            SupportSubject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            SupportBody: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    onSubmit() {
        debugger;
        this.submitted = true;
        if (!this.AppSuportForm.invalid) {
            this.gymServices.SendFeedbackEmail().subscribe(result => {
                alert('Feedback Send');
            }, error => alert(error.message));
        }
    }
    get fval() {
        return this.AppSuportForm.controls;
    }
};
SupportComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"] }
];
SupportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-support',
        template: _raw_loader_support_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_support_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"]])
], SupportComponent);



/***/ }),

/***/ "zlKe":
/*!***********************************************************!*\
  !*** ./src/app/salary-master/salary-master.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGFyeS1tYXN0ZXIvc2FsYXJ5LW1hc3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2017.js.map