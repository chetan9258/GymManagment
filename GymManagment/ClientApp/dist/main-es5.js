function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/add-employee/add-employee.component.html": (
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-employee/add-employee.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddEmployeeAddEmployeeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{modelheaderval}}</h4>\r\n        <hr />\r\n\r\n        <form [formGroup]=\"AddEmpForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrId\" formControlName=\"MbrId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrUserId\" formControlName=\"MbrUserId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrShipId\" formControlName=\"MbrShipId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"sal_Id\" formControlName=\"sal_Id\" style=\"display:none\">\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Members Type</label>\r\n                    <select class=\"form-control\" (change)=\"filterForeCasts($event.target.value)\" [(ngModel)]=\"MbrTypeddl\" formControlName=\"MbrType\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrType.errors }\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                        <option value=\"Enquiry\">Enquiry</option>\r\n                        <option value=\"GymMember\">Gym Member</option>\r\n                        <option value=\"Trainer\">Trainer</option>\r\n                        <option value=\"FloorManager\">Floor Manager</option>\r\n                        <option value=\"Receptionist\">Receptionist</option>\r\n                        <option value=\"officeboy\">office boy</option>\r\n                        <!--<option value=\"PT\">PT</option>-->\r\n                    </select>\r\n                    <div *ngIf=\"submitted && fval.MbrType.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.MbrType.errors.required\">\r\n                            Members Type is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"MbrTypeddl != 'PT'\">\r\n                <hr />\r\n                <div class=\"form-row \">\r\n                    <h5 class=\"mb-2\">Personal Information</h5>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"name\"> Name</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrName\" formControlName=\"MbrName\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrName.errors }\">\r\n                        <div *ngIf=\"submitted && fval.MbrName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.MbrName.errors.required\">\r\n                                Full Name is required and must be a valid name\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Gender</label>\r\n\r\n                        <select formControlName=\"MbrGender\" [(ngModel)]=\"MbrGender\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrGender.errors }\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                            <option value=\"Male\">Male</option>\r\n                            <option value=\"FeMale\">FeMale</option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && fval.MbrGender.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.MbrGender.errors.required\">\r\n                                Gender is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> DOB</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrDOB\" formControlName=\"MbrDOB\" (change)=\"onDOBSelect($event)\">\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Mobile</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrMob\" formControlName=\"MbrMob\" (keypress)=\"numberOnly($event)\" maxlength=\"10\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrMob.errors }\">\r\n                        <div *ngIf=\"submitted && fval.MbrMob.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.MbrMob.errors.required || fval.MbrMob.errors.maxlength || fval.MbrMob.errors.minlength\">\r\n                                Mobile No is required\r\n                            </div> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Mobile 2</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrMob2\" formControlName=\"MbrMob2\" (keypress)=\"numberOnly($event)\" maxlength=\"10\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Email</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrEmail\" formControlName=\"MbrEmail\">\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-row\">\r\n\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Address</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrAddr\" formControlName=\"MbrAddr\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> City</label>\r\n                        <select formControlName=\"MbrCity\" [(ngModel)]=\"MbrCityddl\" class=\"form-control\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                            <option value=\"Pune\">Pune</option>\r\n                            <option value=\"Mumbai\">Mumbai</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> State</label>\r\n                        <select formControlName=\"MbrState\" [(ngModel)]=\"MbrStateddl\" class=\"form-control\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                            <option value=\"Maharastra\">Maharastra</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-row\">\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Pincode</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"MbrPincode\" [(ngModel)]=\"MbrPincode\" (keypress)=\"numberOnly($event)\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Enquiry Date </label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrDOE\" formControlName=\"MbrDOE\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Description</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"GeneralDesc\" [(ngModel)]=\"GeneralDesc\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <div *ngIf=\"MbrTypeddl == 'Trainer' || MbrTypeddl == 'FloorManager'\">\r\n                            <label> PT Charges </label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"MbrPTCharges\" [(ngModel)]=\"MbrPTCharges\" (keypress)=\"numberOnly($event)\">\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div *ngIf=\"MbrTypeddl != 'GymMember' && MbrTypeddl != 'PT' && MbrTypeddl != 'Enquiry'\">\r\n                <hr />\r\n                <div class=\"form-row \">\r\n                    <h5 class=\"mb-2\">Salary Information</h5>\r\n                </div>\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Salary</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"MbrSalary\" [(ngModel)]=\"MbrSalary\" (keypress)=\"numberOnly($event)\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Description</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"SalDesc\" [(ngModel)]=\"SalDesc\">\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"MbrTypeddl == 'Trainer' || MbrTypeddl == 'FloorManager'\">\r\n\r\n                <div class=\"form-row\">\r\n                    <h5 class=\"mb-2\">Certification Details</h5>\r\n                </div>\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Certification Name</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrCertification\" formControlName=\"MbrCertification\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Completion Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrCertificationDt\" formControlName=\"MbrCertificationDt\" name=\"MbrshipStartDt\">\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"MbrTypeddl == 'GymMember' ||MbrTypeddl == 'Trainer' || MbrTypeddl == 'FloorManager'\">\r\n                <hr />\r\n                <div class=\"form-row \">\r\n                    <h5 class=\"mb-2\">MemberShip Plan</h5>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Plan Name</label>\r\n\r\n                        <select formControlName=\"MbrPlans\" [(ngModel)]=\"MbrPlansddl\" class=\"form-control\" (change)=\"showMemberShipPlan($event.target.value)\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                            <option *ngFor=\"let plan of _MbrPlans\" value={{plan.MbrShipId}}>\r\n                                {{plan.MbrShipName}} -({{plan.MbrShipDurationInDays}})\r\n                            </option>\r\n                        </select>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrshipAmt\" formControlName=\"MbrshipAmt\" disabled>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Paid Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"MbrshipPaidAmt\" [(ngModel)]=\"MbrshipPaidAmt\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Remaining Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"RemBalance\" [(ngModel)]=\"RemBalance\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>MemberShip Days</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrshipDays\" formControlName=\"MbrshipDays\" disabled>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Start Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" (change)=\"onDateChange($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrshipStartDt\" formControlName=\"MbrshipStartDt\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> End Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrshipEndDt\" formControlName=\"MbrshipEndDt\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid By</label>\r\n                        <select class=\"form-control\" formControlName=\"MbrPaidBy\" [(ngModel)]=\"MbrPaidByddl\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                            <option value=\"Cash\">Cash</option>\r\n                            <option value=\"Card\">Card</option>\r\n                            <option value=\"Gpay\">Gpay</option>\r\n                            <option value=\"PhonePay\">PhonePay</option>\r\n\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" (change)=\"onDateChange($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"PaidDt\" formControlName=\"PaidDt\">\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Description</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"MbrshipDesc\" [(ngModel)]=\"MbrshipDesc\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Batch</label>\r\n                        <select class=\"form-control\" formControlName=\"MbrBatch\" [(ngModel)]=\"MbrBatch\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                            <option value=\"Morning\">Morning</option>\r\n                            <option value=\"Afternoon\">Afternoon</option>\r\n                            <option value=\"Evening\">Evening</option>\r\n\r\n                        </select>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"MbrTypeddl == 'GymMember' || MbrTypeddl == 'PT'\" style=\"display:none\">\r\n                <!--hide for time bin-->\r\n                <hr />\r\n                <div class=\"form-row \">\r\n                    <h5 class=\"mb-2\">Personal Training Plan</h5>\r\n                </div>\r\n                <div *ngIf=\"MbrTypeddl == 'PT'\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label>Select Member</label>\r\n                            <select formControlName=\"PtMemberId\" [(ngModel)]=\"PtMemberId\" class=\"form-control\" (change)=\"showPersonalTrainingPlans($event.target.value)\">\r\n                                <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                                <option *ngFor=\"let mbr of _PTMembers\" value={{mbr.MbrId}}>\r\n                                    {{mbr.MbrName}}\r\n                                </option>\r\n                            </select>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>PT Traning Plan</label>\r\n                        <select formControlName=\"MbrPTPlanId\" [(ngModel)]=\"MbrPTPlanId\" class=\"form-control\" (change)=\"showPersonalTrainingPlans($event.target.value)\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                            <option *ngFor=\"let plan of _MbrPlans\" value={{plan.MbrShipId}}>\r\n                                {{plan.MbrShipName}} -({{plan.MbrShipDurationInDays}})\r\n                            </option>\r\n                        </select>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Training Days</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrPtDays\" formControlName=\"MbrPtDays\" disabled>\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>PT Trainer Name</label>\r\n                        <select formControlName=\"MbrPtTrainerId\" [(ngModel)]=\"MbrPtTrainerId\" class=\"form-control\" (change)=\"showPTTrainerCharges($event.target.value)\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                            <option *ngFor=\"let plan of _PTTrainer\" value={{plan.MbrId}}>\r\n                                {{plan.MbrName}}\r\n                            </option>\r\n                        </select>\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>PT Charges</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrPTChargesofTrainer\" formControlName=\"MbrPTChargesofTrainer\" disabled>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Paid Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"MbrPTAmt\" [(ngModel)]=\"MbrPTAmt\">\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid By</label>\r\n                        <select class=\"form-control\" formControlName=\"MbrPTAmtPaidBy\" [(ngModel)]=\"MbrPTAmtPaidBy\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                            <option value=\"Cash\">Cash</option>\r\n                            <option value=\"Card\">Card</option>\r\n                            <option value=\"Gpay\">Gpay</option>\r\n                            <option value=\"PhonePay\">PhonePay</option>\r\n\r\n                        </select>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Start Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrPTStartDt\" formControlName=\"MbrPTStartDt\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> End Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrPTEndDt\" formControlName=\"MbrPTEndDt\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Description</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"MbrPTDesc\" [(ngModel)]=\"MbrPTDesc\">\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <!--<input type=\"submit\" class=\"fadeIn fourth\" value=\"Add\">-->\r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"{{btnVal}}\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n    </div>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/add-expenses/add-expenses.component.html": (
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-expenses/add-expenses.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddExpensesAddExpensesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{modelheaderval}}</h4>\r\n        <hr />\r\n        <form [formGroup]=\"AddExpensesForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"ExpensesId\" formControlName=\"ExpensesId\" style=\"display:none\">\r\n            </div>\r\n            <div class=\"form-row\">\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Date </label>\r\n                    <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"ExpenseDate\" formControlName=\"ExpenseDate\" [ngClass]=\"{ 'is-invalid': submitted && fval.ExpenseDate.errors }\">\r\n                    <div *ngIf=\"submitted && fval.ExpenseDate.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.ExpenseDate.errors.required\">\r\n                            Date is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Expense Type</label>\r\n                    <select class=\"form-control\" [(ngModel)]=\"Category\" formControlName=\"Category\" [ngClass]=\"{ 'is-invalid': submitted && fval.Category.errors }\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option value=\"Travel\">Travel</option>\r\n                        <option value=\"Cleaning\">Cleaning</option>\r\n                        <option value=\"Equipments\">Equipments</option>\r\n                        <option value=\"Others\">Others</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && fval.Category.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.Category.errors.required\">\r\n                            Expense Type is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                 \r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Sub Category</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"SubCategory\" formControlName=\"SubCategory\" maxlength=\"10\">\r\n                </div>\r\n                 \r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Amount</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Amount\" formControlName=\"Amount\" (keypress)=\"numberOnly($event)\" maxlength=\"10\" [ngClass]=\"{ 'is-invalid': submitted && fval.Amount.errors }\">\r\n                    <div *ngIf=\"submitted && fval.Amount.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.Amount.errors.required\">\r\n                            Amount is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Description</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Description\" formControlName=\"Description\" maxlength=\"10\">\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"{{btnVal}}\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n    </div>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/add-gym-branches/add-gym-branches.component.html": (
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-gym-branches/add-gym-branches.component.html ***!
    \********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddGymBranchesAddGymBranchesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"p-2\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Branch</h4>\r\n    <hr />\r\n\r\n    <div class=\"form-row\">\r\n        <div class=\"form-group col-md-4\">\r\n            <label for=\"name\">Branch Name</label>\r\n            <input type=\"text\" [(ngModel)]=\"EmpName\" class=\"form-control\" formControlName=\"EmpName\" name=\"EmpName\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n            <label> Contact Person Name</label>\r\n            <input type=\"text\" [(ngModel)]=\"EmpMob\" class=\"form-control\" formControlName=\"EmpMob\" name=\"EmpMob\" (keypress)=\"numberOnly($event)\" maxlength=\"10\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n            <label> Contact Number</label>\r\n            <input type=\"text\" [(ngModel)]=\"EmpMob\" class=\"form-control\" formControlName=\"EmpMob\" name=\"EmpMob\" (keypress)=\"numberOnly($event)\" maxlength=\"10\">\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n\r\n\r\n        <div class=\"form-group col-md-4\">\r\n            <label> Address </label>\r\n            <input type=\"text\" [(ngModel)]=\"EmpMob\" class=\"form-control\" formControlName=\"EmpMob\" name=\"EmpMob\" (keypress)=\"numberOnly($event)\" maxlength=\"10\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n            <label> City</label>\r\n            <select [(ngModel)]=\"EmpCity\" formControlName=\"EmpCity\" name=\"EmpCity\" class=\"form-control\" (change)=\"filterForeCasts($event.target.value)\">\r\n                <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                <option value=\"Pune\" selected>Pune</option>\r\n                <option value=\"Mumbai\">Mumbai</option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n            <label> State</label>\r\n            <select [(ngModel)]=\"EmpState\" formControlName=\"EmpState\" name=\"EmpState\" class=\"form-control\" (change)=\"filterForeCasts($event.target.value)\">\r\n                <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                <option value=\"Maharastra\" selected>Maharastra</option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n            <label> Pincode</label>\r\n            <input type=\"text\" [(ngModel)]=\"EmpPincode\" class=\"form-control\" formControlName=\"EmpPincode\" name=\"EmpPincode\" (keypress)=\"numberOnly($event)\">\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <input type=\"submit\" class=\"fadeIn fourth\" value=\"Add\">\r\n    <input type=\"submit\" class=\"fadeIn fourth\" value=\"Cancel\">\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/add-membership-plan/add-membership-plan.component.html": (
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-membership-plan/add-membership-plan.component.html ***!
    \**************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddMembershipPlanAddMembershipPlanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{modelheaderval}}</h4>\r\n        <hr />\r\n\r\n        <form [formGroup]=\"AddPlanForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n            <div style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrShipId\" formControlName=\"MbrShipId\" style=\"display:none\"> \r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label for=\"name\">Plan Name</label>\r\n                    <input type=\"text\" [(ngModel)]=\"MbrShipName\" class=\"form-control\" formControlName=\"MbrShipName\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrShipName.errors }\">\r\n                    <div *ngIf=\"submitted && fval.MbrShipName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.MbrShipName.errors.required\">\r\n                            Plan Name is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Amount </label>\r\n                    <input type=\"text\" [(ngModel)]=\"MbrShipAmt\" class=\"form-control\" formControlName=\"MbrShipAmt\" (keypress)=\"numberOnly($event)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrShipAmt.errors }\">\r\n                    <div *ngIf=\"submitted && fval.MbrShipAmt.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.MbrShipAmt.errors.required\">\r\n                            Please enter amount.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Duration (Days) </label>\r\n                    <input type=\"text\" [(ngModel)]=\"MbrShipDurationInDays\" class=\"form-control\" formControlName=\"MbrShipDurationInDays\" (keypress)=\"numberOnly($event)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrShipDurationInDays.errors }\">\r\n                    <div *ngIf=\"submitted && fval.MbrShipDurationInDays.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.MbrShipDurationInDays.errors.required\">\r\n                            Enter Plan Duration.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label for=\"name\">Start Date</label>\r\n                    <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"StartDt\" formControlName=\"StartDt\">\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> End Date</label>\r\n                    <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"EndDt\" formControlName=\"EndDt\">\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Description </label>\r\n                    <input type=\"text\" [(ngModel)]=\"Description\" class=\"form-control\" formControlName=\"Description\" >\r\n                </div>\r\n            </div>\r\n              \r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"{{btnVal}}\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n\r\n    </div>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/add-ptdetails/add-ptdetails.component.html": (
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-ptdetails/add-ptdetails.component.html ***!
    \**************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddPtdetailsAddPtdetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{modelheaderval}}</h4>\r\n\r\n        <form [formGroup]=\"AddPTForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrId\" formControlName=\"MbrId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrUserId\" formControlName=\"MbrUserId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrShipId\" formControlName=\"MbrShipId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"TrainerId\" formControlName=\"TrainerId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MembershipType\" formControlName=\"MembershipType\" style=\"display:none\" value=\"PT\">\r\n\r\n            </div>\r\n            <hr />\r\n\r\n            <div>\r\n\r\n                <div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label>Select Member</label>\r\n                            <select formControlName=\"MbrId\" [(ngModel)]=\"MbrId\" class=\"form-control\" (change)=\"showPersonalTrainingPlans($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrId.errors }\">\r\n                                <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                                <option *ngFor=\"let mbr of _PTMembers\" value={{mbr.MbrId}}>\r\n                                    {{mbr.MbrName}}\r\n                                </option>\r\n                            </select>\r\n                            <div *ngIf=\"submitted && fval.MbrId.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"fval.MbrId.errors.required\">\r\n                                    Member is required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr />\r\n\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>PT Traning Plan</label>\r\n                        <select formControlName=\"MbrShipId\" [(ngModel)]=\"MbrShipId\" class=\"form-control\" (change)=\"showPersonalTrainingPlans($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrShipId.errors }\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                            <option *ngFor=\"let plan of _MbrPlans\" value={{plan.MbrShipId}}>\r\n                                {{plan.MbrShipName}} -({{plan.MbrShipDurationInDays}})\r\n                            </option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && fval.MbrShipId.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.MbrShipId.errors.required\">\r\n                                Membership Plan is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Training Days</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrPtDays\" formControlName=\"MbrPtDays\" disabled>\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>PT Trainer Name</label>\r\n                        <select formControlName=\"TrainerId\" [(ngModel)]=\"TrainerId\" class=\"form-control\" (change)=\"showPTTrainerCharges($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && fval.TrainerId.errors }\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                            <option *ngFor=\"let plan of _PTTrainer\" value={{plan.MbrId}}>\r\n                                {{plan.MbrName}}\r\n                            </option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && fval.TrainerId.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.TrainerId.errors.required\">\r\n                                Trainer Name is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>PT Charges</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrPTChargesofTrainer\" formControlName=\"MbrPTChargesofTrainer\" disabled>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Paid Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"PaidAmt\" [(ngModel)]=\"PaidAmt\" [ngClass]=\"{ 'is-invalid': submitted && fval.PaidAmt.errors }\">\r\n                        <div *ngIf=\"submitted && fval.PaidAmt.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.PaidAmt.errors.required\">\r\n                                Paid amount is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid By</label>\r\n                        <select class=\"form-control\" formControlName=\"PaidBy\" [(ngModel)]=\"PaidBy\" [ngClass]=\"{ 'is-invalid': submitted && fval.PaidBy.errors }\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                            <option value=\"Cash\">Cash</option>\r\n                            <option value=\"Card\">Card</option>\r\n                            <option value=\"Gpay\">Gpay</option>\r\n                            <option value=\"PhonePay\">PhonePay</option>\r\n\r\n                        </select>\r\n                        <div *ngIf=\"submitted && fval.PaidBy.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.PaidBy.errors.required\">\r\n                                Paid by is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"PaidDt\" formControlName=\"PaidDt\" [ngClass]=\"{ 'is-invalid': submitted && fval.PaidDt.errors }\">\r\n                        <div *ngIf=\"submitted && fval.PaidDt.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.PaidDt.errors.required\">\r\n                                Paid Date is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Start Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" (change)=\"onDateChange($event)\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrshipStartDt\" formControlName=\"MbrshipStartDt\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> End Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"MbrshipEndDt\" formControlName=\"MbrshipEndDt\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>PT Sessions</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"PTSessions\" [(ngModel)]=\"PTSessions\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Description</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"Discription\" [(ngModel)]=\"Discription\">\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <!--<input type=\"submit\" class=\"fadeIn fourth\" value=\"Add\">-->\r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"{{btnVal}}\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n    </div>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/add-remaining-balance/add-remaining-balance.component.html": (
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-remaining-balance/add-remaining-balance.component.html ***!
    \******************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddRemainingBalanceAddRemainingBalanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Remaining Balance</h4>\r\n\r\n        <form [formGroup]=\"AddRemBalForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrId\" formControlName=\"MbrId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrShipId\" formControlName=\"MbrShipId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MembershipType\" formControlName=\"MembershipType\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrshipStartDt\" formControlName=\"MbrshipStartDt\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrshipEndDt\" formControlName=\"MbrshipEndDt\" style=\"display:none\">\r\n            </div>\r\n             \r\n            <div>\r\n                <hr /> \r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Member Name</label> \r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrName\" formControlName=\"MbrName\" disabled>\r\n                            \r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Remaining Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"RemBalance\" formControlName=\"RemBalance\" disabled>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Paid Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"PaidAmt\" [(ngModel)]=\"PaidAmt\"> <!--(keypress)=\"BalanceAmount($event)\"-->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Balance Amount</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"BalRemaining\" [(ngModel)]=\"BalRemaining\" >\r\n                    </div>\r\n                      \r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"PaidDt\" formControlName=\"PaidDt\">\r\n\r\n                    </div>\r\n                     \r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid By</label>\r\n                        <select class=\"form-control\" formControlName=\"PaidBy\" [(ngModel)]=\"PaidByddl\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                            <option value=\"Cash\">Cash</option>\r\n                            <option value=\"Card\">Card</option>\r\n                            <option value=\"Gpay\">Gpay</option>\r\n                            <option value=\"PhonePay\">PhonePay</option>\r\n\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Description</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"Discription\" [(ngModel)]=\"Discription\"> \r\n                    </div> \r\n                </div>\r\n            </div>\r\n\r\n        \r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"Submit\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n    </div>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/add-salary/add-salary.component.html": (
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-salary/add-salary.component.html ***!
    \********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddSalaryAddSalaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{modelheaderval}}</h4>\r\n        <form [formGroup]=\"AddSalaryForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div>\r\n                <hr />\r\n                <div class=\"form-row \">\r\n                    <h5 class=\"mb-2\">Add Salary</h5>\r\n                </div>\r\n                <div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label> Member Name </label>\r\n                            <select formControlName=\"MbrId\" [(ngModel)]=\"MbrId\" class=\"form-control\" (change)=\"ShowDesignations($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrId.errors }\">\r\n                                <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                                <option *ngFor=\"let mbr of _SalMembers\" value={{mbr.MbrId}}>\r\n                                    {{mbr.MbrName}}\r\n                                </option>\r\n                            </select>\r\n                            <div *ngIf=\"submitted && fval.MbrId.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"fval.MbrId.errors.required\">\r\n                                    Member is required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-row\">\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Designation</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrDesignation\" formControlName=\"MbrDesignation\" disabled> \r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Salary Motnh</label>\r\n                        <select formControlName=\"SalMonth\" [(ngModel)]=\"SalMonth\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.SalMonth.errors }\">\r\n                            <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                            <option value=\"Jan\">January</option>\r\n                            <option value=\"Feb\">Febrary</option>\r\n                            <option value=\"Mar\">March</option>\r\n                            <option value=\"Apr\">April</option>\r\n                            <option value=\"May\">May</option>\r\n                            <option value=\"Jun\">Jun</option>\r\n                            <option value=\"Jul\">July</option>\r\n                            <option value=\"Aug\">Augst</option>\r\n                            <option value=\"Sep\">September</option>\r\n                            <option value=\"Oct\">October</option>\r\n                            <option value=\"Nov\">November</option>\r\n                            <option value=\"Dec\">December</option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && fval.SalMonth.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.SalMonth.errors.required\">\r\n                                Salary Month is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label> Paid Date</label>\r\n                        <input type=\"date\" (keypress)=\"numberOnly($event)\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" class=\"form-control\" [(ngModel)]=\"SalPaidDt\" formControlName=\"SalPaidDt\" [ngClass]=\"{ 'is-invalid': submitted && fval.SalPaidDt.errors }\">\r\n                        <div *ngIf=\"submitted && fval.SalPaidDt.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.SalPaidDt.errors.required\">\r\n                                Paid Date sis required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Total Salary</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"TotalSal\" formControlName=\"TotalSal\" disabled >\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Paid Salary</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"PaidSal\" formControlName=\"PaidSal\" [ngClass]=\"{ 'is-invalid': submitted && fval.PaidSal.errors }\">\r\n                        <div *ngIf=\"submitted && fval.PaidSal.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.PaidSal.errors.required\">\r\n                                Paid Salary is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Total Leaves</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"TotalLeaves\" formControlName=\"TotalLeaves\" value=\"0\">\r\n                        \r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Comment</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Comment\" formControlName=\"Comment\" >\r\n                        \r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <!--<input type=\"submit\" class=\"fadeIn fourth\" value=\"Add\">-->\r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"{{btnVal}}\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n    </div>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/all-invoices/all-invoices.component.html": (
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-invoices/all-invoices.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAllInvoicesAllInvoicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n\r\n        <form [formGroup]=\"AddInvoiceForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Select Year</label>\r\n                    <select formControlName=\"InvoiceYear\" (change)=\"ShowMembersByYear($event.target.value)\" [(ngModel)]=\"InvoiceYear\" class=\"form-control\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option value=\"2023\">2023</option>\r\n                        <option value=\"2022\">2022</option>\r\n                        <option value=\"2021\">2021</option>\r\n                        <option value=\"2020\">2020</option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Select Member</label>\r\n                    <select formControlName=\"MbrId\" [(ngModel)]=\"MbrId\" class=\"form-control\" (change)=\"GetInvoiceList($event.target.value)\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option *ngFor=\"let mbr of _InvoiceMbrs\" value={{mbr.MbrId}}>\r\n                            {{mbr.MbrName}}\r\n                        </option>\r\n                    </select>\r\n                     \r\n                </div>\r\n\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Select Invoice</label>\r\n                    <select formControlName=\"MbrUserId\" [(ngModel)]=\"MbrUserId\" class=\"form-control\" (change)=\"ShowInvoice($event.target.value)\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option *ngFor=\"let mbr of _InvoiceMbrsList\" value={{mbr.MbrUserId}}>\r\n                            {{mbr.MembershipType}}\r\n                        </option>\r\n                    </select>\r\n                   \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"invoice\"  *ngIf=\"DispayInvoice\">\r\n                <div class=\"header\">\r\n                    <h1>INVOICE</h1>\r\n                    <h2>Number: {{InvoiceNumber}}</h2>\r\n                </div>\r\n                <div class=\"client-details\">\r\n                    <h3>Client Details:</h3>\r\n                    <p>{{GymName}}</p>\r\n                    <p>{{GymAddress}}</p>\r\n                    <p>{{GymContactNo}}</p>\r\n                </div>\r\n                <div class=\"invoice-details\">\r\n                    <h3>Invoice Details</h3>\r\n                    <p>Date: {{PaidDt}}</p> \r\n                </div>\r\n                <table class=\"invoice-table\">\r\n                    <tr>\r\n                        <th>Service Name</th>\r\n                        <th>Price</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>{{Serivice1}}</td>\r\n                        <td>{{PaidAmt}}</td>\r\n                    </tr>\r\n                    <!-- Add additional services as needed -->\r\n                </table>\r\n                <div class=\"total\">\r\n                    <h3>Total: {{PaidAmt}}</h3>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/all-reports/all-reports.component.html": (
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-reports/all-reports.component.html ***!
    \**********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAllReportsAllReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Reports</h4>\r\n\r\n        <form [formGroup]=\"AllReportsForm\" action=\"#\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div>\r\n                <hr />\r\n                <div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <input type=\"radio\" id=\"rdEyr\" value=\"YearlyReport\" name=\"allReports\" (change)=\"OnReportChanges($event)\">\r\n                            <label for=\"rdEyr\">Member Yearly Report</label><br>\r\n                        </div>\r\n                        <!--<div class=\"form-group col-md-4\">\r\n            <input type=\"radio\" id=\"rdFR\" value=\"FinantialReport\" name=\"allReports\" (change)=\"OnReportChanges($event)\">\r\n            <label for=\"rdFR\">Finantial Report</label><br>\r\n        </div>-->\r\n                        <div class=\"form-group col-md-4\">\r\n                            <input type=\"radio\" id=\"rdSummury\" value=\"Summury\" name=\"allReports\" (change)=\"OnReportChanges($event)\">\r\n                            <label for=\"rdSummury\">Summury</label><br>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n\r\n                        <div class=\"form-group col-md-4\">\r\n                            <input type=\"radio\" id=\"rdMr\" value=\"MbrShipReport\" name=\"allReports\" (change)=\"OnReportChanges($event)\">\r\n                            <label for=\"rdMr\">Membership Report</label><br>\r\n                        </div>\r\n                        <div class=\"form-group col-md-4\">\r\n                            <input type=\"radio\" id=\"edPt\" value=\"PersonalTraining\" name=\"allReports\" (change)=\"OnReportChanges($event)\">\r\n                            <label for=\"edPt\">Personal Training</label><br>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-row\" *ngIf=\"optionValue\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label>Select Member</label>\r\n                            <select formControlName=\"MemberId\" [(ngModel)]=\"MemberId\" class=\"form-control\"  >\r\n                                <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                                <option *ngFor=\"let mbr of _Members\" value={{mbr.MbrId}}>\r\n                                    {{mbr.MbrName}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <input type=\"submit\" class=\"fadeIn fourth\" value=\"Submit\">\r\n            </div>\r\n            <div>\r\n                <div class=\"form-row\">\r\n                    <h3> Report</h3><br>\r\n                    <img (click)=\"exportToExcel()\" src=\"./assets/excel-48.png\"   class = \"rptPicture\"/>\r\n\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                                 class=\"ag-theme-alpine\"\r\n                                 [columnDefs]=\"columnDefs\"\r\n                                 [animateRows]=\"true\"\r\n                                 (gridReady)=\"onGridReady($event)\"\r\n                                 [rowData]=\"rowData\"\r\n                                 pagination=\"true\"\r\n                                 paginationPageSize=\"20\">\r\n                </ag-grid-angular>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": (
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<body>\r\n  <!--<app-nav-menu></app-nav-menu>-->\r\n  <div class=\"container-fluid p-0\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html": (
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
    \**************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCounterCounterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html": (
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html ***!
    \****************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmployeeEmployeeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n        <div style=\"margin-bottom:5px;\">\r\n            <button class=\"btn-info\" (click)=\"AddEmployee()\">Add Member</button>\r\n        </div>\r\n        <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                         class=\"ag-theme-alpine\"\r\n                         [columnDefs]=\"columnDefs\"\r\n                         (gridReady)=\"onGridReady($event)\"\r\n                         [frameworkComponents]=\"frameworkComponents\"\r\n                         [animateRows]=\"true\"\r\n                         [rowData]=\"rowData\"\r\n                         pagination=\"true\"\r\n                         paginationPageSize=\"20\">\r\n        </ag-grid-angular>\r\n    </div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html": (
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
    \********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFetchDataFetchDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html": (
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"loginFormDesign d-flex align-items-center justify-content-center \">\r\n    <div class=\"wrapper fadeInDown m-0\">\r\n        <div class=\"card m-0\">\r\n            <form [formGroup]=\"ForgotPasswordform\" (ngSubmit)=\"onSubmit()\" action=\"#\" class=\"d-flex flex-column\">\r\n                <div class=\"h3 text-center text-white\">Forgot Password</div>\r\n                <div class=\"d-flex align-items-center input-field my-3 mb-4\">\r\n                    <span class=\"far fa-user p-2\"></span>\r\n                    <input type=\"text\" formControlName=\"EmailAdr\" placeholder=\"Email Address\" required class=\"form-control\" >\r\n                </div>\r\n                 \r\n                <div> <input type=\"submit\" value=\"Login\" class=\"btn btn-primary\"> </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/gym-branches/gym-branches.component.html": (
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gym-branches/gym-branches.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGymBranchesGymBranchesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n        <button class=\"btn-info\" (click)=\"AddEmployee()\">Add New Branch</button>\r\n        <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                         class=\"ag-theme-alpine\"\r\n                         [columnDefs]=\"columnDefs\"\r\n                         (gridReady)=\"onGridReady($event)\"\r\n                         [frameworkComponents]=\"frameworkComponents\"\r\n                         [animateRows]=\"true\"\r\n                         pagination=\"true\"\r\n                         paginationPageSize=\"20\">\r\n        </ag-grid-angular>\r\n    </div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/gym-expenses/gym-expenses.component.html": (
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gym-expenses/gym-expenses.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGymExpensesGymExpensesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n        <div style=\"margin-bottom:5px;\">\r\n            <button class=\"btn-info\" (click)=\"AddExpense()\">Add Expense</button>\r\n        </div>\r\n        <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                         class=\"ag-theme-alpine\"\r\n                         [columnDefs]=\"columnDefs\"\r\n                         (gridReady)=\"onGridReady($event)\"\r\n                         [frameworkComponents]=\"frameworkComponents\"\r\n                         [animateRows]=\"true\"\r\n                         pagination=\"true\"\r\n                         [rowData]=\"rowData\"\r\n                         paginationPageSize=\"20\">\r\n        </ag-grid-angular>\r\n    </div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/gym-profile/gym-profile.component.html": (
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gym-profile/gym-profile.component.html ***!
    \**********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGymProfileGymProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile</h4>\r\n        <hr />\r\n        <form [formGroup]=\"GymProfileForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n            <div style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"GymProfileId\" formControlName=\"GymProfileId\" style=\"display:none\">\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Gym Name</label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"GymName\" formControlName=\"GymName\" [ngClass]=\"{ 'is-invalid': submitted && fval.GymName.errors }\">\r\n                    <div *ngIf=\"submitted && fval.GymName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.GymName.errors.required\">\r\n                            Gym Name is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>First Name</label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"FName\" formControlName=\"FName\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Last Name </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"LName\" formControlName=\"LName\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Mobile No</label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MobileNumber\" formControlName=\"MobileNumber\" maxlength=\"10\" (keypress)=\"numberOnly($event)\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Address</label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Address\" formControlName=\"Address\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Email Id</label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"EMailId\" formControlName=\"EMailId\">\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> MemberShip Plan </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrShipName\" formControlName=\"MbrShipName\" disabled>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Amount Paid </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"PaidAmt\" formControlName=\"PaidAmt\" disabled>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Start Date</label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrshipStartDt\" formControlName=\"MbrshipStartDt\" disabled>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Expired </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrshipEndDt\" formControlName=\"MbrshipEndDt\" disabled>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> MemberShip Status </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mbrShipStatus\" formControlName=\"mbrShipStatus\" disabled>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> GST No </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"GSTNo\" formControlName=\"GSTNo\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Website </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Website\" formControlName=\"Website\">\r\n                </div>\r\n            </div>\r\n\r\n            <input type=\"button\" class=\"fadeIn fourth\" value=\"Update Profile\" (click)=\"onSubmit($event)\">\r\n\r\n            <div class=\"form-row \">\r\n                <h5 class=\"mb-2\">Admin Profile</h5>\r\n            </div>\r\n            <hr />\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <input type=\"button\" class=\"fadeIn fourth\" [value]=\"btnValue\"  (click)=\"onSubmit($event)\"><!--Activate Admin Profile-->\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-row\"  *ngIf=\"isShown\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Enter OTP </label><br />\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"OTPValue\" formControlName=\"OTPValue\" maxlength=\"6\" (keypress)=\"VerifyOTP($event)\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-row \">\r\n                <h5 class=\"mb-2\">Change Password</h5>\r\n            </div>\r\n            <hr />\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Old Password</label>\r\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"OldPassword\" formControlName=\"OldPassword\" [ngClass]=\"{ 'is-invalid': submitted && fval.OldPassword.errors }\">\r\n                    <div *ngIf=\"submitted && fval.OldPassword.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.OldPassword.errors.required\">\r\n                            Old password is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>New Password</label>\r\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"NewPassword\" formControlName=\"NewPassword\" [ngClass]=\"{ 'is-invalid': submitted && fval.NewPassword.errors }\">\r\n                    <div *ngIf=\"submitted && fval.NewPassword.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.NewPassword.errors.required\">\r\n                            New password is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Conform password</label>\r\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"ConfirmPassword\" formControlName=\"ConfirmPassword\" [ngClass]=\"{ 'is-invalid': submitted && fval.ConfirmPassword.errors }\">\r\n                    <div *ngIf=\"submitted && fval.ConfirmPassword.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.ConfirmPassword.errors.required\">\r\n                            Conformed password is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <input type=\"button\" class=\"fadeIn fourth\" value=\"Update Password\" (click)=\"onSubmit($event)\">\r\n\r\n        </form>\r\n    </div>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": (
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n        <!-- Main content -->\r\n        <section class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <!-- Small boxes (Stat box) -->\r\n                <div class=\"row text-center\">\r\n                    <div class=\"col-lg-4 col-6\">\r\n                        <!-- small box -->\r\n                        <div class=\"small-box bg-info\">\r\n                            <div class=\"inner topPadding\">\r\n                                <h3>Gym Members</h3>\r\n\r\n                                <p style=\"font-size:20px;\">{{GymMember}}</p>\r\n                            </div>\r\n                            <div class=\"icon\">\r\n                                <i class=\"ion ion-bag\"></i>\r\n                            </div>\r\n                            <a href=\"#\" [routerLink]=\"['/Employee']\" class=\"small-box-footer text-light\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- ./col -->\r\n                    <div class=\"col-lg-4 col-6\">\r\n                        <!-- small box -->\r\n                        <div class=\"small-box bg-success\">\r\n                            <div class=\"inner topPadding\">\r\n                                <h3>Trainer's</h3>\r\n                                <p style=\"font-size:20px;\"> {{Trainer}}</p>\r\n                            </div>\r\n                            <div class=\"icon\">\r\n                                <i class=\"ion ion-stats-bars\"></i>\r\n                            </div>\r\n                            <a href=\"#\" [routerLink]=\"['/Employee']\" class=\"small-box-footer text-light\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- ./col -->\r\n                    <div class=\"col-lg-4 col-6\">\r\n                        <!-- small box -->\r\n                        <div class=\"small-box bg-warning\">\r\n                            <div class=\"inner topPadding\">\r\n                                <h3>Profetinal Trainers</h3>\r\n                                <p style=\"font-size:20px;\">{{ PT }}</p>\r\n                            </div>\r\n                            <div class=\"icon\">\r\n                                <i class=\"ion ion-person-add\"></i>\r\n                            </div>\r\n                            <a href=\"#\" [routerLink]=\"['/Employee']\" class=\"small-box-footer text-light\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- ./col -->\r\n                </div>\r\n                <!-- /.row -->\r\n                <!-- Small boxes (Stat box) -->\r\n                <div class=\"row text-center\" style=\"margin-top:5px\">\r\n                    <div class=\"col-lg-4 col-6\">\r\n                        <!-- small box -->\r\n                        <div class=\"small-box bg-danger\">\r\n                            <div class=\"inner topPadding\">\r\n                                <h3>Month Enqiries</h3>\r\n                                <p style=\"font-size:20px;\">{{Enquiry}}</p>\r\n                            </div>\r\n                            <div class=\"icon\">\r\n                                <i class=\"ion ion-bag\"></i>\r\n                            </div>\r\n                            <a href=\"#\" [routerLink]=\"['/Employee']\" class=\"small-box-footer text-light\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- ./col -->\r\n                    <div class=\"col-lg-4 col-6\">\r\n                        <!-- small box -->\r\n                        <div class=\"small-box bg-primary\">\r\n                            <div class=\"inner topPadding\">\r\n                                <h3>Membership expiring </h3>\r\n                                <p style=\"font-size:20px;\"> {{ MbrShipExpiring }}</p>\r\n                            </div>\r\n                            <div class=\"icon\">\r\n                                <i class=\"ion ion-stats-bars\"></i>\r\n                            </div>\r\n                            <a href=\"#\" [routerLink]=\"['/Employee']\" class=\"small-box-footer text-light\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- ./col -->\r\n                    <div class=\"col-lg-4 col-6\">\r\n                        <!-- small box -->\r\n                        <div class=\"small-box bg-secondary\">\r\n                            <div class=\"inner topPadding\">\r\n                                <h3>Event</h3>\r\n                                <p style=\"font-size:20px;\">{{ Events }}</p>\r\n                            </div>\r\n                            <div class=\"icon\">\r\n                                <i class=\"ion ion-person-add\"></i>\r\n                            </div>\r\n                            <a href=\"#\" [routerLink]=\"['/Employee']\" class=\"small-box-footer text-light\">More info <i class=\"fas fa-arrow-circle-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- ./col -->\r\n                </div>\r\n                <!-- /.row -->\r\n                <!-- Main row -->\r\n                <div class=\"row\">\r\n                    <!-- Left col -->\r\n                    <section class=\"col-lg-12 connectedSortable\">\r\n                        <!-- Custom tabs (Charts with tabs)-->\r\n                        <div class=\"card\" style=\"max-width:100% !important;margin:10px 0 0 0 !important;padding:0px !important\">\r\n                            <div class=\"card-header\">\r\n                                <h3 class=\"card-title\">\r\n                                    <i class=\"fas fa-chart-pie mr-1\"></i>\r\n                                    Sales\r\n                                </h3>\r\n                            </div><!-- /.card-header -->\r\n                            <div class=\"card-body\">\r\n                                <div class=\"tab-content p-0\">\r\n                                    <ngx-charts-bar-vertical [view]=\"[1000,400]\"\r\n                                                             [results]=\"saleData\"\r\n                                                             [xAxisLabel]=\"'Months'\"\r\n                                                             [legendTitle]=\"'Sale Chart'\"\r\n                                                             [yAxisLabel]=\"'Sales'\"\r\n                                                             [legend]=\"true\"\r\n                                                             [showXAxisLabel]=\"true\"\r\n                                                             [showYAxisLabel]=\"true\"\r\n                                                             [xAxis]=\"true\"\r\n                                                             [yAxis]=\"true\"\r\n                                                             [gradient]=\"true\">\r\n                                    </ngx-charts-bar-vertical>\r\n                                </div>\r\n                            </div><!-- /.card-body -->\r\n                        </div>\r\n                        <!-- /.card -->\r\n                    </section>\r\n                    <!-- /.Left col -->\r\n                </div>\r\n                <!-- /.row (main row) -->\r\n                <div class=\"row\">\r\n                    <section class=\"col-lg-12 connectedSortable\">\r\n                        <div>\r\n                            <div class=\"card-header\">\r\n                                <h3 class=\"card-title\">\r\n                                    <i class=\"fas fa-chart-pie mr-1\"></i>\r\n                                    New Member's Enqiry\r\n                                </h3>\r\n                            </div>\r\n                            <ag-grid-angular style=\"width: 100%; height: 300px;\"\r\n                                             class=\"ag-theme-alpine\"\r\n                                             [columnDefs]=\"columnDefs\"\r\n                                             (gridReady)=\"onGridReady($event)\"\r\n                                             [animateRows]=\"true\"\r\n                                             pagination=\"true\"\r\n                                             paginationPageSize=\"20\">\r\n                            </ag-grid-angular>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <section class=\"col-lg-12 connectedSortable\">\r\n                        <div>\r\n                            <div class=\"card-header\">\r\n                                <h3 class=\"card-title\">\r\n                                    <i class=\"fas fa-chart-pie mr-1\"></i>\r\n                                   Upcoming Birthdays\r\n                                </h3>\r\n                            </div>\r\n                            <ag-grid-angular style=\"width: 100%; height: 300px;\"\r\n                                             class=\"ag-theme-alpine\"\r\n                                             [columnDefs]=\"columnDefs1\"\r\n                                             (gridReady)=\"onGridReady1($event)\"\r\n                                             [animateRows]=\"true\"\r\n                                             pagination=\"true\"\r\n                                             paginationPageSize=\"20\">\r\n                            </ag-grid-angular>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n            </div><!-- /.container-fluid -->\r\n        </section>\r\n        <!-- /.content -->\r\n    </div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": (
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"bg-image\">\r\n    <div class=\"loginFormDesign d-flex align-items-center justify-content-center \">\r\n        <div class=\"wrapper fadeInDown m-0\">\r\n            <div class=\"card m-0\">\r\n                <form [formGroup]=\"loginform\" (ngSubmit)=\"onSubmit()\" action=\"#\" class=\"d-flex flex-column\">\r\n                    <div class=\"h3 text-center text-white\">Login</div>\r\n                    <div class=\"d-flex align-items-center input-field my-3 mb-4\">\r\n                        <span class=\"far fa-user p-2\"></span>\r\n                        <input type=\"text\" formControlName=\"MobileNo\" [(ngModel)]=\"MobileNo\"  placeholder=\"Mobile Number\" required class=\"form-control\" maxlength=\"10\" (keypress)=\"numberOnly($event)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MobileNo.errors }\">\r\n                        <div *ngIf=\"submitted && fval.MobileNo.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.MobileNo.errors.required || fval.MobileNo.errors.maxlength || fval.MobileNo.errors.minlength\">\r\n                                Mobile No is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex align-items-center input-field mb-4\">\r\n                        <span class=\"fas fa-lock p-2\"></span>\r\n                        <input type=\"password\" formControlName=\"password\" placeholder=\"Password\" required class=\"form-control\" id=\"pwd\" maxlength=\"5\">\r\n                    </div>\r\n                    <div class=\"d-sm-flex align-items-sm-center justify-content-sm-between\">\r\n                        <div class=\"d-flex align-items-center\"> <!--<label class=\"option\"><input type=\"checkbox\" checked> <span class=\"checkmark\"></span> </label>--> </div>\r\n                        <div class=\"mt-sm-0 mt-3\"><a href=\"#\">Forgot password?</a></div>\r\n                    </div>\r\n                    <div> <input type=\"submit\" value=\"Login\" class=\"btn btn-primary\"> </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/membership-history/membership-history.component.html": (
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/membership-history/membership-history.component.html ***!
    \************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembershipHistoryMembershipHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n\r\n        <h3>Members Hisory</h3>\r\n        <form [formGroup]=\"MbrHistoryForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Select Member</label>\r\n                    <select formControlName=\"PtMemberId\" [(ngModel)]=\"PtMemberId\" class=\"form-control\" (change)=\"showPersonalTrainingPlans($event.target.value)\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                        <option *ngFor=\"let mbr of _Members\" value={{mbr.MbrId}}>\r\n                            {{mbr.MbrName}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n            <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                             class=\"ag-theme-alpine\"\r\n                             [columnDefs]=\"columnDefs\"\r\n                             (gridReady)=\"onGridReady($event)\"\r\n                             [frameworkComponents]=\"frameworkComponents\"\r\n                             [animateRows]=\"true\"\r\n                             pagination=\"true\"\r\n                             [rowData]=\"rowData\"\r\n                             paginationPageSize=\"20\">\r\n            </ag-grid-angular>\r\n        </form>\r\n    </div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/membership-plan/membership-plan.component.html": (
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/membership-plan/membership-plan.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMembershipPlanMembershipPlanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n        <div style=\"margin-bottom:5px\">\r\n            <button class=\"btn-info\" (click)=\"onBtnClick()\">Add MemberShip Plan</button>\r\n        </div>\r\n        <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                         class=\"ag-theme-alpine\"\r\n                         [columnDefs]=\"columnDefs\"\r\n                         (gridReady)=\"onGridReady($event)\"\r\n                         [frameworkComponents]=\"frameworkComponents\"\r\n                         [animateRows]=\"true\"\r\n                         pagination=\"true\"\r\n                         [rowData]=\"rowData\"\r\n                         paginationPageSize=\"20\">\r\n        </ag-grid-angular>\r\n    </div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html": (
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
    \****************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavMenuNavMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<header>\r\n    <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3\">\r\n        <div class=\"container\">\r\n            <div class=\"headerTitle\">\r\n                <a class=\"navbar-brand\" [routerLink]=\"['/Home']\">Welcome {{GymName}}</a>\r\n            </div>\r\n\r\n            <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n                 [ngClass]=\"{ show: isExpanded }\" style=\"width:70%\">\r\n                <ul class=\"navbar-nav mr-auto horizontal\">\r\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link\">Gym Details</a>\r\n                        <ul class=\"navBackColor\">\r\n                            <li>\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/MbrPlans']\">MemberShip Plans</a>\r\n\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/MembershipHistory']\"> Attendend</a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link \">Gym Member</a> \r\n                        <ul class=\"navBackColor\">\r\n                            <li>\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/Employee']\">Members</a>\r\n\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/PTDetails']\">Personal Training</a>\r\n\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/RenewalMembership']\">Renewal Memberships</a>\r\n\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/RemainingBalance']\">Remaining Balance</a>\r\n                                <div>\r\n                                    <a class=\"nav-link text-dark\" [routerLink]=\"['/MembershipHistory']\"> Members History</a>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link\">Account</a>\r\n                        <ul class=\"navBackColor\">\r\n                            <li>\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/GymExpenses']\">Expenses</a>\r\n                                <!--<div *ngIf=\"isShown\">-->\r\n                                    <a class=\"nav-link text-dark\" [routerLink]=\"['/SalaryDetails']\">Salary</a>\r\n                                <!--</div>-->\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/AllInvoices']\">All Invoices</a>\r\n\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/AllReports']\">Reports</a>\r\n\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link\">Profile</a>\r\n                        <ul class=\"navBackColor\">\r\n                            <li>\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/GymProfile']\">Gym Profile</a> \r\n\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/AppSupport']\">Support</a>\r\n\r\n                                <a class=\"nav-link text-dark\" [routerLink]=\"['/SendMessage']\">Send Message</a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n\r\n                </ul>\r\n            </div>\r\n            <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n                 [ngClass]=\"{ show: isExpanded }\">\r\n                <ul class=\"navbar-nav mr-auto horizontal\" style=\"text-align:center\"> \r\n                    <li class=\"rightli\" [routerLinkActive]=\"['link-active']\" > \r\n                        <img   src=\"./assets/shutdown.png\" class=\"picture1\" (click)=\"logout()\" />\r\n\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n\r\n        </div>\r\n    </nav>\r\n</header>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/payments/payments.component.html": (
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payments/payments.component.html ***!
    \****************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaymentsPaymentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n         <label>Members Payment</label>\r\n        <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                         class=\"ag-theme-alpine\"\r\n                         [columnDefs]=\"columnDefs\"\r\n                         (gridReady)=\"onGridReady($event)\" \r\n                         [animateRows]=\"true\"\r\n                         pagination=\"true\"\r\n                         paginationPageSize=\"20\">\r\n        </ag-grid-angular>\r\n    </div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/ptdetails/ptdetails.component.html": (
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ptdetails/ptdetails.component.html ***!
    \******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPtdetailsPtdetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n        <div style=\"margin-bottom:5px;\">\r\n            <button class=\"btn-info\" (click)=\"AddPT()\">Add Personal Training</button>\r\n        </div>\r\n        <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                         class=\"ag-theme-alpine\"\r\n                         [columnDefs]=\"columnDefs\"\r\n                         (gridReady)=\"onGridReady($event)\"\r\n                         [frameworkComponents]=\"frameworkComponents\"\r\n                         [animateRows]=\"true\"\r\n                          [rowData]=\"rowData\"\r\n                         pagination=\"true\"\r\n                         paginationPageSize=\"20\">\r\n        </ag-grid-angular>\r\n    </div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/remaining-balance/remaining-balance.component.html": (
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remaining-balance/remaining-balance.component.html ***!
    \**********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRemainingBalanceRemainingBalanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n         \r\n        <h3>Remaining Balances</h3>\r\n        <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                         class=\"ag-theme-alpine\"\r\n                         [columnDefs]=\"columnDefs\"\r\n                         (gridReady)=\"onGridReady($event)\"\r\n                         [frameworkComponents]=\"frameworkComponents\"\r\n                         [animateRows]=\"true\"\r\n                         pagination=\"true\"\r\n                         paginationPageSize=\"20\">\r\n        </ag-grid-angular>\r\n    </div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/renewal-membership/renewal-membership.component.html": (
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/renewal-membership/renewal-membership.component.html ***!
    \************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRenewalMembershipRenewalMembershipComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n     <h3>Renewal Membership</h3>\r\n    <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                     class=\"ag-theme-alpine\"\r\n                     [columnDefs]=\"columnDefs\"\r\n                     (gridReady)=\"onGridReady($event)\"\r\n                     [frameworkComponents]=\"frameworkComponents\"\r\n                     [animateRows]=\"true\"\r\n                     pagination=\"true\"\r\n                     (rowClicked)='onRowClicked($event)'\r\n                     paginationPageSize=\"20\">\r\n    </ag-grid-angular>\r\n</div>\r\n ";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/renewal-payments/renewal-payments.component.html": (
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/renewal-payments/renewal-payments.component.html ***!
    \********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRenewalPaymentsRenewalPaymentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Renewal Payment</h4>\r\n        <hr />\r\n        <form [formGroup]=\"RenewalPaymentForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MbrId\" formControlName=\"MbrId\" style=\"display:none\">\r\n                <input type=\"text\" [(ngModel)]=\"MembershipType\" formControlName=\"MembershipType\" style=\"display:none\">\r\n                \r\n            </div>\r\n            <div class=\"form-row\">\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Member Name </label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrName\" formControlName=\"MbrName\" disabled>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Batch</label>\r\n                    <select class=\"form-control\" formControlName=\"MbrBatch\" [(ngModel)]=\"MbrBatch\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option value=\"Morning\">Morning</option>\r\n                        <option value=\"Afternoon\">Afternoon</option>\r\n                        <option value=\"Evening\">Evening</option>\r\n\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Plan Name</label>\r\n\r\n                    <select formControlName=\"MbrShipId\" [(ngModel)]=\"MbrShipId\" class=\"form-control\" (change)=\"showMemberShipPlan($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrShipId.errors }\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option *ngFor=\"let plan of _MbrPlans\" value={{plan.MbrShipId}}>\r\n                            {{plan.MbrShipName}} -({{plan.MbrShipDurationInDays}})\r\n                        </option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && fval.MbrShipId.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.MbrShipId.errors.required\">\r\n                            Plan is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Charges </label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MbrShipCharges\" formControlName=\"MbrShipCharges\" disabled>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Days </label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Days\" formControlName=\"Days\" disabled>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Paid Amount </label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"PaidAmt\" formControlName=\"PaidAmt\" [ngClass]=\"{ 'is-invalid': submitted && fval.PaidAmt.errors }\">\r\n                    <div *ngIf=\"submitted && fval.PaidAmt.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.PaidAmt.errors.required\">\r\n                            Paid Amount is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Paid By</label>\r\n                    <select class=\"form-control\" formControlName=\"PaidBy\" [(ngModel)]=\"PaidBy\" [ngClass]=\"{ 'is-invalid': submitted && fval.PaidBy.errors }\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option value=\"Cash\">Cash</option>\r\n                        <option value=\"Card\">Card</option>\r\n                        <option value=\"Gpay\">Gpay</option>\r\n                        <option value=\"PhonePay\">PhonePay</option>\r\n                    </select>\r\n\r\n                    <div *ngIf=\"submitted && fval.PaidBy.errors\" class=\"invalid-feedback\" >\r\n                        <div *ngIf=\"fval.PaidBy.errors.required\">\r\n                            Paid By is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Paid Date </label>\r\n                    <input type=\"date\" class=\"form-control\" [(ngModel)]=\"PaidDt\" formControlName=\"PaidDt\" [ngClass]=\"{ 'is-invalid': submitted && fval.PaidDt.errors }\">\r\n                    <div *ngIf=\"submitted && fval.PaidDt.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.PaidDt.errors.required\">\r\n                            Paid Date is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Start Date </label>\r\n                    <input type=\"date\" class=\"form-control\" [(ngModel)]=\"MbrshipStartDt\" formControlName=\"MbrshipStartDt\" (change)=\"onDateChange($event)\" >\r\n                </div> \r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                  \r\n                <div class=\"form-group col-md-4\">\r\n                    <label> Expire Date</label>\r\n                    <input type=\"date\" class=\"form-control\" [(ngModel)]=\"MbrshipEndDt\" formControlName=\"MbrshipEndDt\">\r\n                </div>\r\n            </div>\r\n\r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"Renewed\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n    </div>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/salary-master/salary-master.component.html": (
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salary-master/salary-master.component.html ***!
    \**************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalaryMasterSalaryMasterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"wrapper fadeInDown\">\r\n    <div>\r\n        <form [formGroup]=\"SalaryDetailsForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n\r\n            <div style=\"margin-bottom: 15px;\" class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"chkMbr\" formControlName=\"chkMbr\" id=\"chkMbr\" name=\"chkMbr\" (change)=\"changed($event)\">\r\n                <label  class=\"form-check-label\"   (click)=\"changeChk()\">Show By Member</label>\r\n            </div>\r\n\r\n            <div *ngIf=\"isShown\" class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Select Member</label>\r\n                    <select formControlName=\"MemberId\" [(ngModel)]=\"MemberId\" class=\"form-control\" (change)=\"GetSalaryMstByMbr($event.target.value)\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n                        <option *ngFor=\"let mbr of _Members\" value={{mbr.MbrId}}>\r\n                            {{mbr.MbrName}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div style=\"margin-bottom:5px;\">\r\n                <button class=\"btn-info\" (click)=\"AddSalary()\">Add Salary Details</button>\r\n            </div>\r\n            <ag-grid-angular style=\"width: 100%; height: 100%;\"\r\n                         domLayout='autoHeight'\r\n                             class=\"ag-theme-alpine\"\r\n                             [columnDefs]=\"columnDefs\"\r\n                             (gridReady)=\"onGridReady($event)\"\r\n                             [frameworkComponents]=\"frameworkComponents\"\r\n                             [animateRows]=\"true\"\r\n                             [rowData]=\"rowData\"\r\n                             pagination=\"true\"\r\n                             paginationPageSize=\"20\">\r\n            </ag-grid-angular>\r\n        </form>\r\n    </div>\r\n</div>\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/send-message/send-message.component.html": (
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/send-message/send-message.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSendMessageSendMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Send Message</h4>\r\n\r\n        <form [formGroup]=\"SendMsgForm\" action=\"#\" (ngSubmit)=\"onSubmit()\">\r\n             \r\n            <div>\r\n                <hr />\r\n                <div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label>Select Member's Type'</label>\r\n                            <select formControlName=\"MbrType\" [(ngModel)]=\"MbrType\" class=\"form-control\" (change)=\"showPersonalTrainingPlans($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrType.errors }\">\r\n                                <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                                <option>Gym Members</option>\r\n                                <option>PT Members</option>\r\n                                <option>Trainers</option>\r\n                                <option>Managers</option>\r\n                            </select>\r\n                            <div *ngIf=\"submitted && fval.MbrType.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"fval.MbrType.errors.required\">\r\n                                    Member Types is required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label>Select Member</label>\r\n                            <ng-multiselect-dropdown [placeholder]=\"'Select Members'\"\r\n                                                     [settings]=\"dropdownSettings\"\r\n                                                     [data]=\"_Members\"\r\n                                                     [(ngModel)]=\"MbrId\"\r\n                                                     (onSelect)=\"onItemSelect($event)\"\r\n                                                     (onSelectAll)=\"onSelectAll($event)\">\r\n                            </ng-multiselect-dropdown>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n           \r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label>Your Message</label>\r\n                        <textarea formControlName=\"MbrMessage\" [(ngModel)]=\"MbrMessage\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.MbrMessages.errors }\"></textarea>\r\n                        <div *ngIf=\"submitted && fval.MbrMessage.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fval.MbrMessage.errors.required\">\r\n                                Your Message is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <!--<input type=\"submit\" class=\"fadeIn fourth\" value=\"Add\">-->\r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"Submit\">\r\n            <input type=\"button\" class=\"fadeIn fourth\" (click)=\"onCancel()\" value=\"Cancel\">\r\n        </form>\r\n    </div>\r\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html": (
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html ***!
    \**************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSupportSupportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div class=\"p-2\">\r\n\r\n        <form [formGroup]=\"AppSuportForm\" (ngSubmit)=\"onSubmit()\" action=\"#\">\r\n            <h3>Contact Form</h3>\r\n            <hr />\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                     \r\n                </div>\r\n                <div class=\"form-group col-md-4\" style=\"text-align:center\">\r\n                    <h2>Contact Info</h2> <br /><br />\r\n                    <label style=\"color:gray\">Email :- Chetan9258@gmail.com</label> <br />\r\n                    <label style=\"color:gray\">Mobile No:- 9021790408</label> \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Your Name</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"SupportName\" [(ngModel)]=\"SupportName\" [ngClass]=\"{ 'is-invalid': submitted && fval.SupportName.errors }\">\r\n                    <div *ngIf=\"submitted && fval.SupportName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.SupportName.errors.required\">\r\n                            Name is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Your Email/ Contact No</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"SupportContact\" [(ngModel)]=\"SupportContact\" [ngClass]=\"{ 'is-invalid': submitted && fval.SupportContact.errors }\">\r\n                    <div *ngIf=\"submitted && fval.SupportContact.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.SupportContact.errors.required\">\r\n                            Email/ Contact No is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Select Subject</label>\r\n                    <select formControlName=\"SupportSubject\" [(ngModel)]=\"SupportSubject\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.SupportSubject.errors }\">\r\n                        <option class=\"dropdown-item\" disabled selected value=\"undefined\">-- Select --</option>\r\n\r\n                        <option value=\"2021\">Web Loading Issue</option>\r\n                        <option value=\"2023\">Gym Members Issue</option>\r\n                        <option value=\"2022\">Report Issue</option>\r\n                        <option value=\"2020\">Others</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && fval.SupportSubject.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.SupportSubject.errors.required\">\r\n                            Subject is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Your Message</label>\r\n                    <textarea formControlName=\"SupportBody\" [(ngModel)]=\"SupportBody\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.SupportBody.errors }\"></textarea>\r\n                    <div *ngIf=\"submitted && fval.SupportBody.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fval.SupportBody.errors.required\">\r\n                            Your Message is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n               \r\n            </div>\r\n            <input type=\"submit\" class=\"fadeIn fourth\">\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/trainers-history/trainers-history.component.html": (
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trainers-history/trainers-history.component.html ***!
    \********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTrainersHistoryTrainersHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<p>trainers-history works!</p>\r\n";

    /***/
  }),
  /***/"./src/$$_lazy_route_resource lazy recursive": (
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/
  /*! no static exports found */
  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

    /***/
  }),
  /***/"./src/app/Renders/btn-renderer.component.ts": (
  /*!***************************************************!*\
    !*** ./src/app/Renders/btn-renderer.component.ts ***!
    \***************************************************/
  /*! exports provided: BtnRendererComponent */
  /***/
  function srcAppRendersBtnRendererComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BtnRendererComponent", function () {
      return BtnRendererComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var BtnRendererComponent = /*#__PURE__*/function () {
      function BtnRendererComponent(gymServices, _router) {
        _classCallCheck(this, BtnRendererComponent);
        this.gymServices = gymServices;
        this._router = _router;
      }
      _createClass(BtnRendererComponent, [{
        key: "agInit",
        value: function agInit(params) {
          this.params = params;
        }
      }, {
        key: "refresh",
        value: function refresh(param) {
          return true;
        }
      }, {
        key: "OnEditClick",
        value: function OnEditClick($event) {
          var params = {
            event: $event,
            rowData: this.params.node.data
          };
          //return this._router.navigate(["/AddEmployee"]);
          this.params.onClick(params);
        }
      }]);
      return BtnRendererComponent;
    }();
    BtnRendererComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };
    BtnRendererComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-btn-renderer',
      template: '<img (click)="OnEditClick($event)" src="./assets/renew.png" alt="" class = "picture1" />'
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], BtnRendererComponent);

    /***/
  }),
  /***/"./src/app/Renders/edit-btn-renderer.component.ts": (
  /*!********************************************************!*\
    !*** ./src/app/Renders/edit-btn-renderer.component.ts ***!
    \********************************************************/
  /*! exports provided: EditBtnRendererComponent */
  /***/
  function srcAppRendersEditBtnRendererComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EditBtnRendererComponent", function () {
      return EditBtnRendererComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var EditBtnRendererComponent = /*#__PURE__*/function () {
      function EditBtnRendererComponent(gymServices, _router) {
        _classCallCheck(this, EditBtnRendererComponent);
        this.gymServices = gymServices;
        this._router = _router;
      }
      _createClass(EditBtnRendererComponent, [{
        key: "agInit",
        value: function agInit(params) {
          this.params = params;
        }
      }, {
        key: "refresh",
        value: function refresh(param) {
          return true;
        }
      }, {
        key: "OnEditClick",
        value: function OnEditClick($event) {
          var params = {
            event: $event,
            rowData: this.params.node.data
          };
          //return this._router.navigate(["/AddEmployee"]);
          this.params.onClick(params);
        }
      }]);
      return EditBtnRendererComponent;
    }();
    EditBtnRendererComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };
    EditBtnRendererComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-btn-renderer',
      template: '<img (click)="OnEditClick($event)" src="./assets/Edit_img.png" alt="" class = "picture1" />'
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], EditBtnRendererComponent);

    /***/
  }),
  /***/"./src/app/add-employee/add-employee.component.css": (
  /*!*********************************************************!*\
    !*** ./src/app/add-employee/add-employee.component.css ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppAddEmployeeAddEmployeeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1lbXBsb3llZS9hZGQtZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  }),
  /***/"./src/app/add-employee/add-employee.component.ts": (
  /*!********************************************************!*\
    !*** ./src/app/add-employee/add-employee.component.ts ***!
    \********************************************************/
  /*! exports provided: AddEmployeeComponent */
  /***/
  function srcAppAddEmployeeAddEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function () {
      return AddEmployeeComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    //import { debug } from 'console';
    var AddEmployeeComponent = /*#__PURE__*/function () {
      function AddEmployeeComponent(gymServices, formBuilder, _router, route, datepipe) {
        _classCallCheck(this, AddEmployeeComponent);
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
      _createClass(AddEmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
          //debugger; 
          this.btnVal = 'Save';
          this.modelheaderval = 'Add Member';
          this.AddEmpForm = this.formBuilder.group({
            MbrType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrId: [''],
            sal_Id: [''],
            MbrName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrMob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
            MbrMob2: [''],
            MbrDOB: [''],
            MbrGender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
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
            PtMemberId: ['']
          });
          this.route.queryParams.subscribe(function (params) {
            if (params != null && params.MbrName != undefined) {
              _this.MbrId = params.MbrId;
              _this.sal_Id = params.sal_Id;
              _this.MbrShipId = params.MbrShipId;
              _this.MbrUserId = params.MbrUserId;
              _this.MbrName = params.MbrName;
              _this.MbrTypeddl = params.MbrType;
              _this.MbrMob = params.MbrMob;
              _this.MbrMob2 = params.MbrMob2;
              _this.MbrDOB = params.MbrDOB;
              _this.MbrGender = params.MbrGender;
              _this.MbrDOE = params.MbrDOE;
              _this.MbrEmail = params.MbrEmail;
              _this.MbrAddr = params.MbrAddr;
              _this.MbrCityddl = params.MbrCity;
              _this.MbrStateddl = params.MbrState;
              _this.MbrPincode = params.MbrPincode;
              _this.MbrSalary = params.MbrSalary;
              _this.SalDesc = params.SalDesc;
              _this.GeneralDesc = params.GeneralDesc;
              _this.MbrCertification = params.MbrCertification;
              _this.MbrCertificationDt = params.MbrCertificationDt;
              _this.EmpName = params.EmpName;
              _this.RemBalance = params.RemBalance;
              _this.MbrPlansddl = params.MbrShipId;
              _this.MbrshipAmt = params.MbrShipAmt;
              _this.MbrshipPaidAmt = params.PaidAmt;
              _this.MbrshipDays = params.MbrShipDurationInDays;
              _this.MbrshipStartDt = params.MbrshipStartDt;
              _this.MbrshipEndDt = params.MbrshipEndDt;
              _this.MbrshipDesc = params.Description;
              _this.MbrPaidByddl = params.PaidBy;
              _this.MbrPTCharges = params.MbrPTCharges;
              _this.MbrBatch = params.MbrBatch;
              _this.MbrPTPlanId = params.MbrPTPlanId;
              _this.MbrPtDays = params.MbrPtDays;
              _this.MbrPtTrainerId = params.MbrPtTrainerId;
              _this.MbrPTChargesofTrainer = params.MbrPTChargesofTrainer;
              _this.MbrPTAmt = params.MbrPTAmt;
              _this.MbrPTAmtPaidBy = params.MbrPTAmtPaidBy;
              _this.MbrPTStartDt = params.MbrPTStartDt;
              _this.MbrPTEndDt = params.MbrPTEndDt;
              _this.MbrPTDesc = params.MbrPTDesc;
              _this.PtMemberId = params.PtMemberId;
              _this.btnVal = 'update';
              _this.modelheaderval = 'Update Member';
            }
          });
          this.GetAllMemberShipPlan();
          this.GetAllMembers();
        }
      }, {
        key: "fval",
        get: function get() {
          return this.AddEmpForm.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;
          this.submitted = true;
          if (!this.AddEmpForm.invalid) {
            if (this.btnVal == "Save") {
              this.gymServices.AddMembers(this.AddEmpForm.value).subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                  alert(result);
                  return _this2._router.navigate(["/Employee"]);
                }
              }, function (error) {
                return alert(error.message);
              });
            } else {
              // Update 
              this.gymServices.UpdateMember(this.AddEmpForm.value).subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                  alert(result);
                  return _this2._router.navigate(["/Employee"]);
                }
              }, function (error) {
                return alert(error.message);
              });
            }
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          return this._router.navigate(["/Employee"]);
        }
      }, {
        key: "GetAllMemberShipPlan",
        value: function GetAllMemberShipPlan() {
          var _this3 = this;
          this.gymServices.GetAllMemberShipPlan().subscribe(function (res) {
            _this3._MbrPlans = res;
            // data contains actual array of users
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "GetAllMembers",
        value: function GetAllMembers() {
          var _this4 = this;
          debugger;
          this.gymServices.GetAllMembers().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
              _this4._Members = result;
              _this4._PTMembers = result.filter(function (x) {
                return x.MbrType == "GymMember";
              });
              _this4._PTTrainer = result.filter(function (x) {
                return x.MbrType == "FloorManager" || x.MbrType == "Trainer";
              });
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "filterForeCasts",
        value: function filterForeCasts(value) {
          this.MbrTypeddl = value;
        }
      }, {
        key: "showMemberShipPlan",
        value: function showMemberShipPlan(value) {
          this.MbrshipAmt = this._MbrPlans.find(function (x) {
            return x.MbrShipId == value;
          }).MbrShipAmt.toString();
          this.MbrshipDays = this._MbrPlans.find(function (x) {
            return x.MbrShipId == value;
          }).MbrShipDurationInDays.toString();
        }
      }, {
        key: "showPersonalTrainingPlans",
        value: function showPersonalTrainingPlans(value) {
          this.MbrPtDays = this._MbrPlans.find(function (x) {
            return x.MbrShipId == value;
          }).MbrShipDurationInDays.toString();
        }
      }, {
        key: "onDateChange",
        value: function onDateChange(value) {
          this.date = new Date(value.srcElement.value);
          this.date.setDate(this.date.getDate() + +this.MbrshipDays);
          this.MbrshipEndDt = this.datepipe.transform(this.date, 'yyyy-MM-dd');
        }
      }, {
        key: "onDOBSelect",
        value: function onDOBSelect(value) {
          this.date = new Date(value.srcElement.value);
          var timeDiff = Math.abs(Date.now() - this.date.getTime());
          var age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
          if (age < 18) {
            alert('Age must be greater than 18');
            this.MbrDOB = '';
          }
        }
      }, {
        key: "showPTTrainerCharges",
        value: function showPTTrainerCharges(value) {
          this.MbrPTChargesofTrainer = this._PTTrainer.find(function (x) {
            return x.MbrId == value;
          }).MbrPTCharges;
        }
      }, {
        key: "numberOnly",
        value: function numberOnly(event) {
          var charCode = event.which ? event.which : event.keyCode;
          if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
          }
          return true;
        }
      }]);
      return AddEmployeeComponent;
    }();
    AddEmployeeComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
      }];
    };
    AddEmployeeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-add-employee',
      template: __importDefault(__webpack_require__( /*! raw-loader!./add-employee.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/add-employee/add-employee.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./add-employee.component.css */"./src/app/add-employee/add-employee.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])], AddEmployeeComponent);

    /***/
  }),
  /***/"./src/app/add-expenses/add-expenses.component.css": (
  /*!*********************************************************!*\
    !*** ./src/app/add-expenses/add-expenses.component.css ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppAddExpensesAddExpensesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1leHBlbnNlcy9hZGQtZXhwZW5zZXMuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  }),
  /***/"./src/app/add-expenses/add-expenses.component.ts": (
  /*!********************************************************!*\
    !*** ./src/app/add-expenses/add-expenses.component.ts ***!
    \********************************************************/
  /*! exports provided: AddExpensesComponent */
  /***/
  function srcAppAddExpensesAddExpensesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AddExpensesComponent", function () {
      return AddExpensesComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var AddExpensesComponent = /*#__PURE__*/function () {
      function AddExpensesComponent(gymServices, formBuilder, _router, route) {
        _classCallCheck(this, AddExpensesComponent);
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.route = route;
        this.submitted = false;
      }
      _createClass(AddExpensesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
          this.btnVal = 'Save';
          this.modelheaderval = 'Add Expense';
          this.AddExpensesForm = this.formBuilder.group({
            ExpensesId: [''],
            ExpenseDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Description: ['']
          });
          this.route.queryParams.subscribe(function (params) {
            debugger;
            if (params != null && params.ExpensesId != undefined) {
              _this5.ExpensesId = params.ExpensesId;
              _this5.ExpenseDate = params.ExpenseDate;
              _this5.Category = params.Category;
              _this5.SubCategory = params.SubCategory;
              _this5.Amount = params.Amount;
              _this5.Description = params.Description;
              _this5.btnVal = 'update';
              _this5.modelheaderval = 'Update Expenses';
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;
          this.submitted = true;
          if (!this.AddExpensesForm.invalid) {
            if (this.btnVal == "Save") {
              this.gymServices.CreateExpense(this.AddExpensesForm.value).subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                  alert(result);
                  return _this6._router.navigate(["/GymExpenses"]);
                } else {
                  alert("Error.");
                }
              }, function (error) {
                return alert(error.message);
              });
            } else {
              // Update 
              this.gymServices.UpdateExpense(this.AddExpensesForm.value).subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                  alert(result);
                  return _this6._router.navigate(["/GymExpenses"]);
                } else {
                  alert("Error.");
                }
              }, function (error) {
                return alert(error.message);
              });
            }
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          return this._router.navigate(["/GymExpenses"]);
        }
      }, {
        key: "numberOnly",
        value: function numberOnly(event) {
          var charCode = event.which ? event.which : event.keyCode;
          if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
          }
          return true;
        }
      }, {
        key: "fval",
        get: function get() {
          return this.AddExpensesForm.controls;
        }
      }]);
      return AddExpensesComponent;
    }();
    AddExpensesComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };
    AddExpensesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-add-expenses',
      template: __importDefault(__webpack_require__( /*! raw-loader!./add-expenses.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/add-expenses/add-expenses.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./add-expenses.component.css */"./src/app/add-expenses/add-expenses.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], AddExpensesComponent);

    /***/
  }),
  /***/"./src/app/add-gym-branches/add-gym-branches.component.css": (
  /*!*****************************************************************!*\
    !*** ./src/app/add-gym-branches/add-gym-branches.component.css ***!
    \*****************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppAddGymBranchesAddGymBranchesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1neW0tYnJhbmNoZXMvYWRkLWd5bS1icmFuY2hlcy5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/add-gym-branches/add-gym-branches.component.ts": (
  /*!****************************************************************!*\
    !*** ./src/app/add-gym-branches/add-gym-branches.component.ts ***!
    \****************************************************************/
  /*! exports provided: AddGymBranchesComponent */
  /***/
  function srcAppAddGymBranchesAddGymBranchesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AddGymBranchesComponent", function () {
      return AddGymBranchesComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var AddGymBranchesComponent = /*#__PURE__*/function () {
      function AddGymBranchesComponent() {
        _classCallCheck(this, AddGymBranchesComponent);
      }
      _createClass(AddGymBranchesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return AddGymBranchesComponent;
    }();
    AddGymBranchesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-add-gym-branches',
      template: __importDefault(__webpack_require__( /*! raw-loader!./add-gym-branches.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/add-gym-branches/add-gym-branches.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./add-gym-branches.component.css */"./src/app/add-gym-branches/add-gym-branches.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], AddGymBranchesComponent);

    /***/
  }),
  /***/"./src/app/add-membership-plan/add-membership-plan.component.css": (
  /*!***********************************************************************!*\
    !*** ./src/app/add-membership-plan/add-membership-plan.component.css ***!
    \***********************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppAddMembershipPlanAddMembershipPlanComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1tZW1iZXJzaGlwLXBsYW4vYWRkLW1lbWJlcnNoaXAtcGxhbi5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/add-membership-plan/add-membership-plan.component.ts": (
  /*!**********************************************************************!*\
    !*** ./src/app/add-membership-plan/add-membership-plan.component.ts ***!
    \**********************************************************************/
  /*! exports provided: AddMembershipPlanComponent */
  /***/
  function srcAppAddMembershipPlanAddMembershipPlanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AddMembershipPlanComponent", function () {
      return AddMembershipPlanComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var AddMembershipPlanComponent = /*#__PURE__*/function () {
      function AddMembershipPlanComponent(gymServices, formBuilder, _router, route) {
        _classCallCheck(this, AddMembershipPlanComponent);
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.route = route;
        this.submitted = false;
      }
      _createClass(AddMembershipPlanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
          this.btnVal = 'Save';
          this.modelheaderval = 'Add Membership Plan';
          this.AddPlanForm = this.formBuilder.group({
            MbrShipId: [''],
            MbrShipName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrShipAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrShipDurationInDays: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            StartDt: [''],
            EndDt: [''],
            Description: ['']
          });
          this.route.queryParams.subscribe(function (params) {
            if (params != null && params.MbrShipName != undefined) {
              _this7.MbrShipId = params.MbrShipId;
              _this7.MbrShipName = params.MbrShipName;
              _this7.MbrShipAmt = params.MbrShipAmt;
              _this7.MbrShipDurationInDays = params.MbrShipDurationInDays;
              _this7.StartDt = params.StartDt;
              _this7.EndDt = params.EndDt;
              _this7.Description = params.Description;
              _this7.btnVal = 'update';
              _this7.modelheaderval = 'Update Plan';
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;
          this.submitted = true;
          if (!this.AddPlanForm.invalid) {
            if (this.btnVal == "Save") {
              this.gymServices.AddPlan(this.AddPlanForm.value).subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                  alert(result);
                  return _this8._router.navigate(["/MbrPlans"]);
                } else {
                  alert("Incorrect Creiditials");
                }
              }, function (error) {
                return alert(error.message);
              });
            } else {
              // Update 
              this.gymServices.UpdatePlan(this.AddPlanForm.value).subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                  alert(result);
                  return _this8._router.navigate(["/MbrPlans"]);
                } else {
                  alert("Incorrect Creiditials");
                }
              }, function (error) {
                return alert(error.message);
              });
            }
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          return this._router.navigate(["/MbrPlans"]);
        }
      }, {
        key: "numberOnly",
        value: function numberOnly(event) {
          var charCode = event.which ? event.which : event.keyCode;
          if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
          }
          return true;
        }
      }, {
        key: "fval",
        get: function get() {
          return this.AddPlanForm.controls;
        }
      }]);
      return AddMembershipPlanComponent;
    }();
    AddMembershipPlanComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };
    AddMembershipPlanComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-add-membership-plan',
      template: __importDefault(__webpack_require__( /*! raw-loader!./add-membership-plan.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/add-membership-plan/add-membership-plan.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./add-membership-plan.component.css */"./src/app/add-membership-plan/add-membership-plan.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], AddMembershipPlanComponent);

    /***/
  }),
  /***/"./src/app/add-ptdetails/add-ptdetails.component.css": (
  /*!***********************************************************!*\
    !*** ./src/app/add-ptdetails/add-ptdetails.component.css ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppAddPtdetailsAddPtdetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wdGRldGFpbHMvYWRkLXB0ZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/add-ptdetails/add-ptdetails.component.ts": (
  /*!**********************************************************!*\
    !*** ./src/app/add-ptdetails/add-ptdetails.component.ts ***!
    \**********************************************************/
  /*! exports provided: AddPTDetailsComponent */
  /***/
  function srcAppAddPtdetailsAddPtdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AddPTDetailsComponent", function () {
      return AddPTDetailsComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var AddPTDetailsComponent = /*#__PURE__*/function () {
      function AddPTDetailsComponent(gymServices, formBuilder, _router, route, datepipe) {
        _classCallCheck(this, AddPTDetailsComponent);
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
      _createClass(AddPTDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
          this.btnVal = 'Save';
          this.modelheaderval = 'Add PT Member';
          this.AddPTForm = this.formBuilder.group({
            MbrId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrUserId: [''],
            MbrShipId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            TrainerId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrPtDays: [''],
            PaidAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PaidBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PaidDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrshipStartDt: [''],
            MbrshipEndDt: [''],
            Discription: [''],
            PTSessions: [''],
            MbrPTChargesofTrainer: [''],
            MembershipType: ['']
          });
          this.route.queryParams.subscribe(function (params) {
            if (params != null && params.MbrName != undefined) {
              //this.GetAllMemberShipPlan();
              //this.GetAllMembers();
              _this9.MbrId = params.MbrId;
              _this9.MbrUserId = params.MbrUserId;
              _this9.MbrShipId = params.MbrShipId;
              _this9.TrainerId = params.TrainerId;
              //this.MbrPtDays = params.MbrPtDays;  
              //this.showPersonalTrainingPlans(params.MbrShipId)
              _this9.PaidAmt = params.PaidAmt;
              _this9.PaidBy = params.PaidBy;
              _this9.PaidDt = params.PaidDt;
              _this9.MbrshipStartDt = params.MbrshipStartDt;
              _this9.MbrshipEndDt = params.MbrshipEndDt;
              _this9.Discription = params.Discription;
              _this9.PTSessions = params.PTSessions;
              _this9.MembershipType = 'PT';
              //this.MbrPTChargesofTrainer = params.MbrPTChargesofTrainer;
              //this.showPTTrainerCharges(params.MbrId)
              _this9.btnVal = 'update';
              _this9.modelheaderval = 'Update Member';
            }
          });
          this.GetAllMemberShipPlan();
          this.GetAllMembers();
        }
      }, {
        key: "fval",
        get: function get() {
          return this.AddPTForm.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this10 = this;
          this.submitted = true;
          if (!this.AddPTForm.invalid) {
            if (this.btnVal == "Save") {
              debugger;
              this.gymServices.AddPTMembers(this.AddPTForm.value).subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                  alert(result);
                  return _this10._router.navigate(["/PTDetails"]);
                }
              }, function (error) {
                return alert(error.message);
              });
            } else {
              // Update 
              this.gymServices.UpdatePTMembers(this.AddPTForm.value).subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                  alert(result);
                  return _this10._router.navigate(["/PTDetails"]);
                }
              }, function (error) {
                return alert(error.message);
              });
            }
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          return this._router.navigate(["/PTDetails"]);
        }
      }, {
        key: "GetAllMemberShipPlan",
        value: function GetAllMemberShipPlan() {
          var _this11 = this;
          this.gymServices.GetAllMemberShipPlan().subscribe(function (res) {
            _this11._MbrPlans = _this11._PTMembers = res.filter(function (x) {
              return x.PlanType == "PT";
            });
            ;
            if (_this11.MbrShipId != undefined) {
              _this11.showPersonalTrainingPlans(_this11.MbrShipId);
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "onDateChange",
        value: function onDateChange(value) {
          this.date = new Date(value.srcElement.value);
          this.date.setDate(this.date.getDate() + +this.MbrPtDays);
          this.MbrshipEndDt = this.datepipe.transform(this.date, 'yyyy-MM-dd');
        }
      }, {
        key: "GetAllMembers",
        value: function GetAllMembers() {
          var _this12 = this;
          debugger;
          this.gymServices.GetAllMembers().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
              _this12._PTMembers = result.filter(function (x) {
                return x.MbrType == "GymMember";
              });
              _this12._PTTrainer = result.filter(function (x) {
                return x.MbrType == "FloorManager" || x.MbrType == "Trainer";
              });
              if (_this12.TrainerId != undefined) {
                _this12.showPTTrainerCharges(_this12.TrainerId);
              }
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "showPersonalTrainingPlans",
        value: function showPersonalTrainingPlans(value) {
          this.MbrPtDays = this._MbrPlans.find(function (x) {
            return x.MbrShipId == value;
          }).MbrShipDurationInDays.toString();
        }
      }, {
        key: "showPTTrainerCharges",
        value: function showPTTrainerCharges(value) {
          this.MbrPTChargesofTrainer = this._PTTrainer.find(function (x) {
            return x.MbrId == value;
          }).MbrPTCharges;
        }
      }]);
      return AddPTDetailsComponent;
    }();
    AddPTDetailsComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
      }];
    };
    AddPTDetailsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-add-ptdetails',
      template: __importDefault(__webpack_require__( /*! raw-loader!./add-ptdetails.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/add-ptdetails/add-ptdetails.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./add-ptdetails.component.css */"./src/app/add-ptdetails/add-ptdetails.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])], AddPTDetailsComponent);

    /***/
  }),
  /***/"./src/app/add-remaining-balance/add-remaining-balance.component.css": (
  /*!***************************************************************************!*\
    !*** ./src/app/add-remaining-balance/add-remaining-balance.component.css ***!
    \***************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppAddRemainingBalanceAddRemainingBalanceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1yZW1haW5pbmctYmFsYW5jZS9hZGQtcmVtYWluaW5nLWJhbGFuY2UuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  }),
  /***/"./src/app/add-remaining-balance/add-remaining-balance.component.ts": (
  /*!**************************************************************************!*\
    !*** ./src/app/add-remaining-balance/add-remaining-balance.component.ts ***!
    \**************************************************************************/
  /*! exports provided: AddRemainingBalanceComponent */
  /***/
  function srcAppAddRemainingBalanceAddRemainingBalanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AddRemainingBalanceComponent", function () {
      return AddRemainingBalanceComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var AddRemainingBalanceComponent = /*#__PURE__*/function () {
      function AddRemainingBalanceComponent(gymServices, formBuilder, _router, route) {
        _classCallCheck(this, AddRemainingBalanceComponent);
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.route = route;
        this._PTMembers = [];
        this._PTTrainer = [];
        this._MbrPlans = [];
        this.submitted = false;
      }
      _createClass(AddRemainingBalanceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
          this.AddRemBalForm = this.formBuilder.group({
            MbrId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrShipId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            RemBalance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MembershipType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PaidDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PaidBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PaidAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            BalRemaining: [''],
            Discription: [''],
            MbrshipStartDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrshipEndDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.route.queryParams.subscribe(function (params) {
            if (params != null && params.MbrName != undefined) {
              _this13.MbrId = params.MbrId;
              _this13.MbrName = params.MbrName;
              _this13.MbrShipId = params.MbrShipId;
              _this13.RemBalance = params.RemBalance;
              _this13.MembershipType = params.MembershipType;
              _this13.MbrshipStartDt = params.MbrshipStartDt;
              _this13.MbrshipEndDt = params.MbrshipEndDt;
            }
          });
          this.GetAllMemberShipPlan();
        }
      }, {
        key: "fval",
        get: function get() {
          return this.AddRemBalForm.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this14 = this;
          this.submitted = true;
          debugger;
          if (!this.AddRemBalForm.invalid) {
            // adding new remaining balance to existing 
            this.AddRemBalForm.value.RemBalance = this.BalRemaining;
            this.gymServices.AddPTMembers(this.AddRemBalForm.value).subscribe(function (result) {
              if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                alert(result);
                return _this14._router.navigate(["/RemainingBalance"]);
              }
            }, function (error) {
              return alert(error.message);
            });
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          return this._router.navigate(["/RemainingBalance"]);
        }
      }, {
        key: "GetAllMemberShipPlan",
        value: function GetAllMemberShipPlan() {
          var _this15 = this;
          this.gymServices.GetAllMemberShipPlan().subscribe(function (res) {
            _this15._MbrPlans = res;
          }, function (error) {
            return alert(error.message);
          });
        }
      }]);
      return AddRemainingBalanceComponent;
    }();
    AddRemainingBalanceComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };
    AddRemainingBalanceComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-add-remaining-balance',
      template: __importDefault(__webpack_require__( /*! raw-loader!./add-remaining-balance.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/add-remaining-balance/add-remaining-balance.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./add-remaining-balance.component.css */"./src/app/add-remaining-balance/add-remaining-balance.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], AddRemainingBalanceComponent);

    /***/
  }),
  /***/"./src/app/add-salary/add-salary.component.css": (
  /*!*****************************************************!*\
    !*** ./src/app/add-salary/add-salary.component.css ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppAddSalaryAddSalaryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zYWxhcnkvYWRkLXNhbGFyeS5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/add-salary/add-salary.component.ts": (
  /*!****************************************************!*\
    !*** ./src/app/add-salary/add-salary.component.ts ***!
    \****************************************************/
  /*! exports provided: AddSalaryComponent */
  /***/
  function srcAppAddSalaryAddSalaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AddSalaryComponent", function () {
      return AddSalaryComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var AddSalaryComponent = /*#__PURE__*/function () {
      function AddSalaryComponent(gymServices, formBuilder, _router, route) {
        _classCallCheck(this, AddSalaryComponent);
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.route = route;
        this._SalMembers = [];
        this.submitted = false;
      }
      _createClass(AddSalaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
          this.btnVal = 'Save';
          this.modelheaderval = 'Add PT Member';
          this.AddSalaryForm = this.formBuilder.group({
            MbrId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrDesignation: [''],
            SalMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            SalPaidDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            TotalSal: [''],
            PaidSal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            TotalLeaves: [''],
            Comment: ['']
          });
          this.route.queryParams.subscribe(function (params) {
            if (params != null && params.MbrName != undefined) {
              _this16.MbrId = params.MbrId;
              _this16.MbrDesignation = params.MbrDesignation;
              _this16.SalMonth = params.SalMonth;
              _this16.SalPaidDt = params.SalPaidDt;
              _this16.TotalSal = params.TotalSal;
              _this16.PaidSal = params.PaidSal;
              _this16.TotalLeaves = params.TotalLeaves;
              _this16.Comment = params.Comment;
              _this16.btnVal = 'update';
              _this16.modelheaderval = 'Update Member';
            }
          });
          this.GetAllMembers();
        }
      }, {
        key: "fval",
        get: function get() {
          return this.AddSalaryForm.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this17 = this;
          this.submitted = true;
          if (!this.AddSalaryForm.invalid) {
            if (this.btnVal == "Save") {
              debugger;
              this.gymServices.SaveSalaryMst(this.AddSalaryForm.value).subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                  alert(result);
                  return _this17._router.navigate(["/AddSalary"]);
                }
              }, function (error) {
                return alert(error.message);
              });
            } else {
              // Update 
              this.gymServices.UpdateSalaryMst(this.AddSalaryForm.value).subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                  alert(result);
                  return _this17._router.navigate(["/AddSalary"]);
                }
              }, function (error) {
                return alert(error.message);
              });
            }
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          return this._router.navigate(["/SalaryDetails"]);
        }
      }, {
        key: "GetAllMembers",
        value: function GetAllMembers() {
          var _this18 = this;
          debugger;
          this.gymServices.GetAllMembers().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
              _this18._SalMembers = result.filter(function (x) {
                return x.MbrType != "GymMember";
              });
              _this18.ShowDesignations(_this18.MbrId);
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "ShowDesignations",
        value: function ShowDesignations(value) {
          this.MbrDesignation = this._SalMembers.find(function (x) {
            return x.MbrId == value;
          }).MbrType.toString();
          this.TotalSal = this._SalMembers.find(function (x) {
            return x.MbrId == value;
          }).MbrSalary.toString();
        }
      }]);
      return AddSalaryComponent;
    }();
    AddSalaryComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };
    AddSalaryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-add-salary',
      template: __importDefault(__webpack_require__( /*! raw-loader!./add-salary.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/add-salary/add-salary.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./add-salary.component.css */"./src/app/add-salary/add-salary.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], AddSalaryComponent);

    /***/
  }),
  /***/"./src/app/all-invoices/all-invoices.component.css": (
  /*!*********************************************************!*\
    !*** ./src/app/all-invoices/all-invoices.component.css ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppAllInvoicesAllInvoicesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".invoice {\r\n    font-family: Arial, sans-serif;\r\n    width: 800px;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    border:2px solid black;\r\n}\r\n\r\n.header {\r\n    background-color: lightgray;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.header h1 {\r\n        margin: 0;\r\n    }\r\n\r\n.header h2 {\r\n        margin: 0;\r\n        font-size: 14px;\r\n        color:black;\r\n    }\r\n\r\n.client-details {\r\n    margin: 20px 0;\r\n    text-align: left;\r\n}\r\n\r\n.client-details h3 {\r\n        margin: 5px ;\r\n    }\r\n\r\n.client-details p {\r\n        margin: 5px;\r\n    }\r\n\r\n.invoice-details {\r\n    margin: 20px 0;\r\n    text-align: right;\r\n}\r\n\r\n.invoice-details h3 {\r\n        margin: 5px;\r\n\r\n    }\r\n\r\n.invoice-details p {\r\n        margin: 5px;\r\n    }\r\n\r\n.invoice-table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.invoice-table th,\r\n    .invoice-table td {\r\n        border: 1px solid black;\r\n        padding: 10px;\r\n    }\r\n\r\n.invoice-table th {\r\n        background-color: lightgray;\r\n        text-align: left;\r\n    }\r\n\r\n.total {\r\n    margin: 20px 0;\r\n    text-align: right;\r\n}\r\n\r\n.total h3 {\r\n        margin: 5;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLWludm9pY2VzL2FsbC1pbnZvaWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVJO1FBQ0ksU0FBUztJQUNiOztBQUVBO1FBQ0ksU0FBUztRQUNULGVBQWU7UUFDZixXQUFXO0lBQ2Y7O0FBRUo7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVJO1FBQ0ksWUFBWTtJQUNoQjs7QUFFQTtRQUNJLFdBQVc7SUFDZjs7QUFFSjtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUk7UUFDSSxXQUFXOztJQUVmOztBQUNBO1FBQ0ksV0FBVztJQUNmOztBQUVKO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFSTs7UUFFSSx1QkFBdUI7UUFDdkIsYUFBYTtJQUNqQjs7QUFFQTtRQUNJLDJCQUEyQjtRQUMzQixnQkFBZ0I7SUFDcEI7O0FBRUo7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVJO1FBQ0ksU0FBUztJQUNiIiwiZmlsZSI6InNyYy9hcHAvYWxsLWludm9pY2VzL2FsbC1pbnZvaWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludm9pY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgICAuaGVhZGVyIGgxIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuXHJcbi5jbGllbnQtZGV0YWlscyB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiAgICAuY2xpZW50LWRldGFpbHMgaDMge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDtcclxuICAgIH1cclxuXHJcbiAgICAuY2xpZW50LWRldGFpbHMgcCB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcblxyXG4uaW52b2ljZS1kZXRhaWxzIHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbiAgICAuaW52b2ljZS1kZXRhaWxzIGgzIHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICB9XHJcbiAgICAuaW52b2ljZS1kZXRhaWxzIHAge1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG5cclxuLmludm9pY2UtdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4gICAgLmludm9pY2UtdGFibGUgdGgsXHJcbiAgICAuaW52b2ljZS10YWJsZSB0ZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW52b2ljZS10YWJsZSB0aCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4udG90YWwge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuICAgIC50b3RhbCBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiA1O1xyXG4gICAgfVxyXG4iXX0= */";

    /***/
  }),
  /***/"./src/app/all-invoices/all-invoices.component.ts": (
  /*!********************************************************!*\
    !*** ./src/app/all-invoices/all-invoices.component.ts ***!
    \********************************************************/
  /*! exports provided: AllInvoicesComponent */
  /***/
  function srcAppAllInvoicesAllInvoicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AllInvoicesComponent", function () {
      return AllInvoicesComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var AllInvoicesComponent = /*#__PURE__*/function () {
      function AllInvoicesComponent(gymServices, formBuilder, _router, datePipe) {
        _classCallCheck(this, AllInvoicesComponent);
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.datePipe = datePipe;
        this._InvoiceMbrs = [];
        this._InvoiceMbrsList = [];
        this.DispayInvoice = false;
      }
      _createClass(AllInvoicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
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
            MbrUserId: ['']
          });
          this.DispayInvoice = false;
        }
      }, {
        key: "ShowMembersByYear",
        value: function ShowMembersByYear(Year) {
          var _this19 = this;
          debugger;
          this.gymServices.GetAllMembers().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
              result = result.filter(function (x) {
                return x.MbrType != "Enquiry";
              });
              _this19._InvoiceMbrs = result.filter(function (x) {
                return x.LastUpdatedDt == null ? "" : new Date(x.LastUpdatedDt).getFullYear() == Year;
              });
            } else {
              _this19._InvoiceMbrs = null;
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "GetInvoiceList",
        value: function GetInvoiceList(MbrId) {
          var _this20 = this;
          this.MbrUserId = 'undefined';
          this.gymServices.GetInvoiceList(MbrId).subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
              _this20._InvoiceMbrsList = result;
            } else {
              _this20._InvoiceMbrsList = null;
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "ShowInvoice",
        value: function ShowInvoice(MbrUserId) {
          var _this21 = this;
          this.gymServices.GetInvoice(MbrUserId).subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
              _this21.InvoiceNumber = result.InvoiceId;
              _this21.GymName = result.GymName;
              _this21.GymAddress = result.Address;
              _this21.GymContactNo = result.MobileNumber;
              _this21.Serivice1 = result.MembershipType;
              _this21.PaidAmt = result.PaidAmt;
              _this21.PaidDt = result.PaidDt;
              _this21.DispayInvoice = true;
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }]);
      return AllInvoicesComponent;
    }();
    AllInvoicesComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
      }];
    };
    AllInvoicesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-all-invoices',
      template: __importDefault(__webpack_require__( /*! raw-loader!./all-invoices.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/all-invoices/all-invoices.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./all-invoices.component.css */"./src/app/all-invoices/all-invoices.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])], AllInvoicesComponent);

    /***/
  }),
  /***/"./src/app/all-reports/all-reports.component.css": (
  /*!*******************************************************!*\
    !*** ./src/app/all-reports/all-reports.component.css ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppAllReportsAllReportsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "label{\r\n    margin-left:10px;\r\n    font-size:medium;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLXJlcG9ydHMvYWxsLXJlcG9ydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hbGwtcmVwb3J0cy9hbGwtcmVwb3J0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgZm9udC1zaXplOm1lZGl1bTtcclxufSJdfQ== */";

    /***/
  }),
  /***/"./src/app/all-reports/all-reports.component.ts": (
  /*!******************************************************!*\
    !*** ./src/app/all-reports/all-reports.component.ts ***!
    \******************************************************/
  /*! exports provided: AllReportsComponent */
  /***/
  function srcAppAllReportsAllReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AllReportsComponent", function () {
      return AllReportsComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! xlsx */"./node_modules/xlsx/xlsx.mjs");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var AllReportsComponent = /*#__PURE__*/function () {
      function AllReportsComponent(gymServices, formBuilder, _router) {
        _classCallCheck(this, AllReportsComponent);
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.optionValue = false;
        this._Members = [];
        this.columnDefs = [{
          headerName: 'Name',
          field: 'MbrName',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Mobile No',
          field: 'MbrMob',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'DOB',
          field: 'MbrDOB',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Marrial Status',
          field: 'MbrMarrialStatus',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Email',
          field: 'MbrEmail',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Addr',
          field: 'MbrAddr',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'City',
          field: 'MbrCity',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'State',
          field: 'MbrState',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Pincode',
          field: 'MbrPincode',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'PT Charges',
          field: 'MbrPTCharges',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Batch',
          field: 'MbrBatch',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Desciption',
          field: 'GeneralDesc',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Gender',
          field: 'MbrGender',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Membership Name',
          field: 'MbrShipName',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'MemberShip Start Dt',
          field: 'MbrshipStartDt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'MemberShip End Dt',
          field: 'MbrshipEndDt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Paid Amt',
          field: 'PaidAmt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Paid Dt',
          field: 'PaidDt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Paid By',
          field: 'PaidBy',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Membership',
          field: 'MembershipType',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Remaining Bal',
          field: 'RemBalance',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Total Members',
          field: 'TotalMembers',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Total Earn',
          field: 'TotalEarn',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Total Amount',
          field: 'TotalAmount',
          filter: 'agTextColumnFilter'
        }];
      }
      _createClass(AllReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
          this.AllReportsForm = this.formBuilder.group({
            MemberId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
          });
          this.GetAllMembers();
        }
      }, {
        key: "GetAllMembers",
        value: function GetAllMembers() {
          var _this22 = this;
          debugger;
          this.gymServices.GetAllMembers().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
              _this22._Members = result;
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "OnReportChanges",
        value: function OnReportChanges(e) {
          this.rdValue = e.target.value;
          if (e.target.value == 'YearlyReport') {
            this.optionValue = true;
          } else this.optionValue = false;
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          debugger;
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this23 = this;
          debugger;
          this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrMob', 'MbrDOB', 'MbrMarrialStatus', 'MbrEmail', 'MbrAddr', 'MbrCity', 'MbrState', 'MbrPincode', 'MbrPTCharges', 'MbrBatch', 'GeneralDesc', 'MbrGender', 'MbrShipName', 'MbrshipStartDt', 'MbrshipEndDt', 'PaidAmt', 'PaidDt', 'PaidBy', 'MembershipType', 'RemBalance', 'TotalAmount', 'TotalEarn', 'TotalMembers'], false);
          if (this.rdValue == "YearlyReport") {
            if (this.MemberId != null) {
              this.gymServices.GetMemberYearlyReport(this.MemberId).subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                  _this23.rowData = result;
                  _this23.gridColumnApi.setColumnsVisible(['MbrName', 'MbrMob', 'MbrDOB', 'MbrMarrialStatus', 'MbrEmail', 'MbrAddr', 'MbrCity', 'MbrState', 'MbrPincode', 'MbrPTCharges', 'MbrBatch', 'GeneralDesc', 'MbrGender', 'MbrShipName', 'MbrshipStartDt', 'MbrshipEndDt', 'PaidAmt', 'PaidDt', 'PaidBy', 'MembershipType', 'RemBalance'], true);
                } else {
                  _this23.rowData = "";
                }
              }, function (error) {
                return alert(error.message);
              });
            } else {
              alert("Please select Members");
            }
          } else if (this.rdValue == "FinantialReport") {
            //this.gymServices.().subscribe(result => {
            //    if (!isNull(result)) {
            //        alert(result);
            //        return this._router.navigate(["/PTDetails"]);
            //    }
            //}, error => alert(error.message))
          } else if (this.rdValue == "Summury") {
            this.gymServices.GetSummaryReport().subscribe(function (result) {
              if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                _this23.rowData = result;
                _this23.gridColumnApi.setColumnsVisible(['MbrShipName', 'MbrshipStartDt', 'MbrshipEndDt', 'TotalMembers', 'TotalEarn'], true);
              } else {
                _this23.rowData = "";
              }
            }, function (error) {
              return alert(error.message);
            });
          } else if (this.rdValue == "MbrShipReport") {
            this.gymServices.GetMembershipReport().subscribe(function (result) {
              if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                _this23.rowData = result;
                _this23.gridColumnApi.setColumnsVisible(['MbrShipName', 'MbrshipStartDt', 'MbrshipEndDt', 'TotalMembers', 'TotalEarn'], true);
              } else {
                _this23.rowData = "";
              }
            }, function (error) {
              return alert(error.message);
            });
          } else if (this.rdValue == "PersonalTraining") {
            this.gymServices.GetPTReport().subscribe(function (result) {
              if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                _this23.rowData = result;
                _this23.gridColumnApi.setColumnsVisible(['MbrName', 'TotalAmount'], true);
              } else {
                _this23.rowData = "";
              }
            }, function (error) {
              return alert(error.message);
            });
          }
        }
      }, {
        key: "exportToExcel",
        value: function exportToExcel() {
          // Get the grid data
          var rowData = this.rowData;
          // Create a new workbook
          var workbook = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_new();
          // Create a new worksheet
          var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].json_to_sheet(rowData);
          // Add the worksheet to the workbook
          xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_append_sheet(workbook, worksheet, 'Data');
          // Generate the Excel file
          xlsx__WEBPACK_IMPORTED_MODULE_5__["writeFile"](workbook, 'data.xlsx');
        }
      }]);
      return AllReportsComponent;
    }();
    AllReportsComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    AllReportsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-all-reports',
      template: __importDefault(__webpack_require__( /*! raw-loader!./all-reports.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/all-reports/all-reports.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./all-reports.component.css */"./src/app/all-reports/all-reports.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], AllReportsComponent);

    /***/
  }),
  /***/"./src/app/app.component.ts": (
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'app';
    });
    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);

    /***/
  }),
  /***/"./src/app/app.module.ts": (
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ag-grid-angular */"./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./nav-menu/nav-menu.component */"./src/app/nav-menu/nav-menu.component.ts");
    /* harmony import */
    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./home/home.component */"./src/app/home/home.component.ts");
    /* harmony import */
    var _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./counter/counter.component */"./src/app/counter/counter.component.ts");
    /* harmony import */
    var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./fetch-data/fetch-data.component */"./src/app/fetch-data/fetch-data.component.ts");
    /* harmony import */
    var _salary_master_salary_master_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./salary-master/salary-master.component */"./src/app/salary-master/salary-master.component.ts");
    /* harmony import */
    var _employee_employee_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./employee/employee.component */"./src/app/employee/employee.component.ts");
    /* harmony import */
    var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./login/login.component */"./src/app/login/login.component.ts");
    /* harmony import */
    var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./btn-cell-renderer/btn-cell-renderer.component */"./src/app/btn-cell-renderer/btn-cell-renderer.component.ts");
    /* harmony import */
    var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./add-employee/add-employee.component */"./src/app/add-employee/add-employee.component.ts");
    /* harmony import */
    var _membership_plan_membership_plan_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./membership-plan/membership-plan.component */"./src/app/membership-plan/membership-plan.component.ts");
    /* harmony import */
    var _gym_branches_gym_branches_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./gym-branches/gym-branches.component */"./src/app/gym-branches/gym-branches.component.ts");
    /* harmony import */
    var _gym_profile_gym_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./gym-profile/gym-profile.component */"./src/app/gym-profile/gym-profile.component.ts");
    /* harmony import */
    var _add_membership_plan_add_membership_plan_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./add-membership-plan/add-membership-plan.component */"./src/app/add-membership-plan/add-membership-plan.component.ts");
    /* harmony import */
    var _add_gym_branches_add_gym_branches_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! ./add-gym-branches/add-gym-branches.component */"./src/app/add-gym-branches/add-gym-branches.component.ts");
    /* harmony import */
    var _payments_payments_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ./payments/payments.component */"./src/app/payments/payments.component.ts");
    /* harmony import */
    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! @swimlane/ngx-charts */"./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/release/esm.js");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */
    var _gym_expenses_gym_expenses_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! ./gym-expenses/gym-expenses.component */"./src/app/gym-expenses/gym-expenses.component.ts");
    /* harmony import */
    var _add_expenses_add_expenses_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! ./add-expenses/add-expenses.component */"./src/app/add-expenses/add-expenses.component.ts");
    /* harmony import */
    var _renewal_membership_renewal_membership_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__( /*! ./renewal-membership/renewal-membership.component */"./src/app/renewal-membership/renewal-membership.component.ts");
    /* harmony import */
    var _remaining_balance_remaining_balance_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__( /*! ./remaining-balance/remaining-balance.component */"./src/app/remaining-balance/remaining-balance.component.ts");
    /* harmony import */
    var _membership_history_membership_history_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__( /*! ./membership-history/membership-history.component */"./src/app/membership-history/membership-history.component.ts");
    /* harmony import */
    var _trainers_history_trainers_history_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__( /*! ./trainers-history/trainers-history.component */"./src/app/trainers-history/trainers-history.component.ts");
    /* harmony import */
    var _renewal_payments_renewal_payments_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__( /*! ./renewal-payments/renewal-payments.component */"./src/app/renewal-payments/renewal-payments.component.ts");
    /* harmony import */
    var _add_remaining_balance_add_remaining_balance_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__( /*! ./add-remaining-balance/add-remaining-balance.component */"./src/app/add-remaining-balance/add-remaining-balance.component.ts");
    /* harmony import */
    var _confirm_equal_validator_directive_ts_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__( /*! ./confirm-equal-validator.directive.ts.directive */"./src/app/confirm-equal-validator.directive.ts.directive.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */
    var _ptdetails_ptdetails_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__( /*! ./ptdetails/ptdetails.component */"./src/app/ptdetails/ptdetails.component.ts");
    /* harmony import */
    var _add_ptdetails_add_ptdetails_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__( /*! ./add-ptdetails/add-ptdetails.component */"./src/app/add-ptdetails/add-ptdetails.component.ts");
    /* harmony import */
    var _Renders_btn_renderer_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__( /*! ./Renders/btn-renderer.component */"./src/app/Renders/btn-renderer.component.ts");
    /* harmony import */
    var _Renders_edit_btn_renderer_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__( /*! ./Renders/edit-btn-renderer.component */"./src/app/Renders/edit-btn-renderer.component.ts");
    /* harmony import */
    var _all_invoices_all_invoices_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__( /*! ./all-invoices/all-invoices.component */"./src/app/all-invoices/all-invoices.component.ts");
    /* harmony import */
    var _support_support_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__( /*! ./support/support.component */"./src/app/support/support.component.ts");
    /* harmony import */
    var _send_message_send_message_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__( /*! ./send-message/send-message.component */"./src/app/send-message/send-message.component.ts");
    /* harmony import */
    var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__( /*! ng-multiselect-dropdown */"./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
    /* harmony import */
    var _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__( /*! ./all-reports/all-reports.component */"./src/app/all-reports/all-reports.component.ts");
    /* harmony import */
    var _add_salary_add_salary_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__( /*! ./add-salary/add-salary.component */"./src/app/add-salary/add-salary.component.ts");
    /* harmony import */
    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__( /*! ./forgot-password/forgot-password.component */"./src/app/forgot-password/forgot-password.component.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    /*import { NgbModule } from '@ng-bootstrap/ng-bootstrap';*/
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"], _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_10__["FetchDataComponent"], _salary_master_salary_master_component__WEBPACK_IMPORTED_MODULE_11__["SalaryMasterComponent"], _employee_employee_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_14__["BtnCellRendererComponent"], _Renders_btn_renderer_component__WEBPACK_IMPORTED_MODULE_36__["BtnRendererComponent"], _Renders_edit_btn_renderer_component__WEBPACK_IMPORTED_MODULE_37__["EditBtnRendererComponent"], _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_15__["AddEmployeeComponent"], _membership_plan_membership_plan_component__WEBPACK_IMPORTED_MODULE_16__["MembershipPlanComponent"], _gym_branches_gym_branches_component__WEBPACK_IMPORTED_MODULE_17__["GymBranchesComponent"], _gym_profile_gym_profile_component__WEBPACK_IMPORTED_MODULE_18__["GymProfileComponent"], _add_membership_plan_add_membership_plan_component__WEBPACK_IMPORTED_MODULE_19__["AddMembershipPlanComponent"], _add_gym_branches_add_gym_branches_component__WEBPACK_IMPORTED_MODULE_20__["AddGymBranchesComponent"], _payments_payments_component__WEBPACK_IMPORTED_MODULE_21__["PaymentsComponent"], _gym_expenses_gym_expenses_component__WEBPACK_IMPORTED_MODULE_24__["GymExpensesComponent"], _add_expenses_add_expenses_component__WEBPACK_IMPORTED_MODULE_25__["AddExpensesComponent"], _renewal_membership_renewal_membership_component__WEBPACK_IMPORTED_MODULE_26__["RenewalMembershipComponent"], _remaining_balance_remaining_balance_component__WEBPACK_IMPORTED_MODULE_27__["RemainingBalanceComponent"], _membership_history_membership_history_component__WEBPACK_IMPORTED_MODULE_28__["MembershipHistoryComponent"], _trainers_history_trainers_history_component__WEBPACK_IMPORTED_MODULE_29__["TrainersHistoryComponent"], _renewal_payments_renewal_payments_component__WEBPACK_IMPORTED_MODULE_30__["RenewalPaymentsComponent"], _add_remaining_balance_add_remaining_balance_component__WEBPACK_IMPORTED_MODULE_31__["AddRemainingBalanceComponent"], _confirm_equal_validator_directive_ts_directive__WEBPACK_IMPORTED_MODULE_32__["ConfirmEqualValidatorDirective"], _ptdetails_ptdetails_component__WEBPACK_IMPORTED_MODULE_34__["PTDetailsComponent"], _add_ptdetails_add_ptdetails_component__WEBPACK_IMPORTED_MODULE_35__["AddPTDetailsComponent"], _all_invoices_all_invoices_component__WEBPACK_IMPORTED_MODULE_38__["AllInvoicesComponent"], _support_support_component__WEBPACK_IMPORTED_MODULE_39__["SupportComponent"], _send_message_send_message_component__WEBPACK_IMPORTED_MODULE_40__["SendMessageComponent"], _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_42__["AllReportsComponent"], _add_salary_add_salary_component__WEBPACK_IMPORTED_MODULE_43__["AddSalaryComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_44__["ForgotPasswordComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_22__["NgxChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
      //NgbModule,
      ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([_btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_14__["BtnCellRendererComponent"], _Renders_btn_renderer_component__WEBPACK_IMPORTED_MODULE_36__["BtnRendererComponent"], _Renders_edit_btn_renderer_component__WEBPACK_IMPORTED_MODULE_37__["EditBtnRendererComponent"]]), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]
      }, {
        path: 'Home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
      }, {
        path: 'Employee',
        component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeComponent"]
      }, {
        path: 'AddEmployee',
        component: _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_15__["AddEmployeeComponent"]
      }, {
        path: 'MbrPlans',
        component: _membership_plan_membership_plan_component__WEBPACK_IMPORTED_MODULE_16__["MembershipPlanComponent"]
      }, {
        path: 'AddMbrPlans',
        component: _add_membership_plan_add_membership_plan_component__WEBPACK_IMPORTED_MODULE_19__["AddMembershipPlanComponent"]
      }, {
        path: 'GymBranches',
        component: _gym_branches_gym_branches_component__WEBPACK_IMPORTED_MODULE_17__["GymBranchesComponent"]
      }, {
        path: 'AddBranches',
        component: _add_gym_branches_add_gym_branches_component__WEBPACK_IMPORTED_MODULE_20__["AddGymBranchesComponent"]
      }, {
        path: 'GymProfile',
        component: _gym_profile_gym_profile_component__WEBPACK_IMPORTED_MODULE_18__["GymProfileComponent"]
      }, {
        path: 'Payments',
        component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_21__["PaymentsComponent"]
      }, {
        path: 'GymExpenses',
        component: _gym_expenses_gym_expenses_component__WEBPACK_IMPORTED_MODULE_24__["GymExpensesComponent"]
      }, {
        path: 'AddExpenses',
        component: _add_expenses_add_expenses_component__WEBPACK_IMPORTED_MODULE_25__["AddExpensesComponent"]
      }, {
        path: 'RenewalMembership',
        component: _renewal_membership_renewal_membership_component__WEBPACK_IMPORTED_MODULE_26__["RenewalMembershipComponent"]
      }, {
        path: 'RenewalPayments',
        component: _renewal_payments_renewal_payments_component__WEBPACK_IMPORTED_MODULE_30__["RenewalPaymentsComponent"]
      }, {
        path: 'RemainingBalance',
        component: _remaining_balance_remaining_balance_component__WEBPACK_IMPORTED_MODULE_27__["RemainingBalanceComponent"]
      }, {
        path: 'AddRemainingBalance',
        component: _add_remaining_balance_add_remaining_balance_component__WEBPACK_IMPORTED_MODULE_31__["AddRemainingBalanceComponent"]
      }, {
        path: 'MembershipHistory',
        component: _membership_history_membership_history_component__WEBPACK_IMPORTED_MODULE_28__["MembershipHistoryComponent"]
      }, {
        path: 'PTDetails',
        component: _ptdetails_ptdetails_component__WEBPACK_IMPORTED_MODULE_34__["PTDetailsComponent"]
      }, {
        path: 'AddPTDetails',
        component: _add_ptdetails_add_ptdetails_component__WEBPACK_IMPORTED_MODULE_35__["AddPTDetailsComponent"]
      }, {
        path: 'AllInvoices',
        component: _all_invoices_all_invoices_component__WEBPACK_IMPORTED_MODULE_38__["AllInvoicesComponent"]
      }, {
        path: 'AppSupport',
        component: _support_support_component__WEBPACK_IMPORTED_MODULE_39__["SupportComponent"]
      }, {
        path: 'SendMessage',
        component: _send_message_send_message_component__WEBPACK_IMPORTED_MODULE_40__["SendMessageComponent"]
      }, {
        path: 'AllReports',
        component: _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_42__["AllReportsComponent"]
      }, {
        path: 'AddSalary',
        component: _add_salary_add_salary_component__WEBPACK_IMPORTED_MODULE_43__["AddSalaryComponent"]
      }, {
        path: 'SalaryDetails',
        component: _salary_master_salary_master_component__WEBPACK_IMPORTED_MODULE_11__["SalaryMasterComponent"]
      }, {
        path: 'ForgotPassword',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_44__["ForgotPasswordComponent"]
      }]), ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_41__["NgMultiSelectDropDownModule"].forRoot()],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_33__["DatePipe"]],
      entryComponents: [_btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_14__["BtnCellRendererComponent"], _Renders_btn_renderer_component__WEBPACK_IMPORTED_MODULE_36__["BtnRendererComponent"], _Renders_edit_btn_renderer_component__WEBPACK_IMPORTED_MODULE_37__["EditBtnRendererComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);

    /***/
  }),
  /***/"./src/app/btn-cell-renderer/btn-cell-renderer.component.ts": (
  /*!******************************************************************!*\
    !*** ./src/app/btn-cell-renderer/btn-cell-renderer.component.ts ***!
    \******************************************************************/
  /*! exports provided: BtnCellRendererComponent */
  /***/
  function srcAppBtnCellRendererBtnCellRendererComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BtnCellRendererComponent", function () {
      return BtnCellRendererComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var BtnCellRendererComponent = /*#__PURE__*/function () {
      function BtnCellRendererComponent(gymServices, _router) {
        _classCallCheck(this, BtnCellRendererComponent);
        this.gymServices = gymServices;
        this._router = _router;
      }
      _createClass(BtnCellRendererComponent, [{
        key: "agInit",
        value: function agInit(params) {
          this.params = params;
        }
      }, {
        key: "refresh",
        value: function refresh(param) {
          return true;
        }
      }, {
        key: "OnEditClick",
        value: function OnEditClick($event) {
          var params = {
            event: $event,
            rowData: this.params.node.data
          };
          //return this._router.navigate(["/AddEmployee"]);
          this.params.onClick(params);
        }
      }, {
        key: "OnDelete",
        value: function OnDelete($event) {
          var params = {
            event: $event,
            rowData: this.params.node.data
          };
          if (window.confirm("Are you sure to delete ? ")) {
            this.params.OnDelete(this.params.node.data);
          }
        }
      }]);
      return BtnCellRendererComponent;
    }();
    BtnCellRendererComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };
    BtnCellRendererComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-btn-cell-renderer',
      template: '<img (click)="OnEditClick($event)" src="./assets/Edit_img.png" alt="" class = "picture1" /> <img (click)="OnDelete($event)" src="./assets/Delete_img.png" alt="" class = "picture1" />'
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], BtnCellRendererComponent);

    /***/
  }),
  /***/"./src/app/confirm-equal-validator.directive.ts.directive.ts": (
  /*!*******************************************************************!*\
    !*** ./src/app/confirm-equal-validator.directive.ts.directive.ts ***!
    \*******************************************************************/
  /*! exports provided: ConfirmEqualValidatorDirective */
  /***/
  function srcAppConfirmEqualValidatorDirectiveTsDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ConfirmEqualValidatorDirective", function () {
      return ConfirmEqualValidatorDirective;
    });
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ConfirmEqualValidatorDirective_1;
    var ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = /*#__PURE__*/function () {
      function ConfirmEqualValidatorDirective() {
        _classCallCheck(this, ConfirmEqualValidatorDirective);
      }
      _createClass(ConfirmEqualValidatorDirective, [{
        key: "validate",
        value: function validate(control) {
          var controlToCompare = control.parent.get(this.appConfirmEqualValidator);
          if (controlToCompare && controlToCompare.value !== control.value) {
            return {
              'notEqual': true
            };
          }
          return null;
        }
      }]);
      return ConfirmEqualValidatorDirective;
    }();
    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata("design:type", String)], ConfirmEqualValidatorDirective.prototype, "appConfirmEqualValidator", void 0);
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appConfirmEqualValidator]',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"],
        useExisting: ConfirmEqualValidatorDirective_1,
        multi: true
      }]
    })], ConfirmEqualValidatorDirective);

    /***/
  }),
  /***/"./src/app/counter/counter.component.ts": (
  /*!**********************************************!*\
    !*** ./src/app/counter/counter.component.ts ***!
    \**********************************************/
  /*! exports provided: CounterComponent */
  /***/
  function srcAppCounterCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CounterComponent", function () {
      return CounterComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var CounterComponent = /*#__PURE__*/function () {
      function CounterComponent() {
        _classCallCheck(this, CounterComponent);
        this.currentCount = 0;
      }
      _createClass(CounterComponent, [{
        key: "incrementCounter",
        value: function incrementCounter() {
          this.currentCount++;
        }
      }]);
      return CounterComponent;
    }();
    CounterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-counter-component',
      template: __importDefault(__webpack_require__( /*! raw-loader!./counter.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html"))["default"]
    })], CounterComponent);

    /***/
  }),
  /***/"./src/app/employee/employee.component.css": (
  /*!*************************************************!*\
    !*** ./src/app/employee/employee.component.css ***!
    \*************************************************/
  /*! exports provided: default */
  /***/
  function srcAppEmployeeEmployeeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */";

    /***/
  }),
  /***/"./src/app/employee/employee.component.ts": (
  /*!************************************************!*\
    !*** ./src/app/employee/employee.component.ts ***!
    \************************************************/
  /*! exports provided: EmployeeComponent */
  /***/
  function srcAppEmployeeEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function () {
      return EmployeeComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../btn-cell-renderer/btn-cell-renderer.component */"./src/app/btn-cell-renderer/btn-cell-renderer.component.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    //import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
    var EmployeeComponent = /*#__PURE__*/function () {
      function EmployeeComponent(gymServices, _router, route) {
        _classCallCheck(this, EmployeeComponent);
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.frameworkComponents = {
          buttonRenderer: _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__["BtnCellRendererComponent"]
        };
        this.columnDefs = [{
          headerName: 'Id',
          field: 'MbrId',
          Filter: true,
          enableSorting: true,
          sortable: true,
          hide: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Name',
          field: 'MbrName',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Designaion',
          field: 'MbrType',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Mobile No',
          field: 'MbrMob',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'DOB',
          field: 'MbrDOB',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Email',
          field: 'MbrEmail',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Address',
          field: 'MbrAddr',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Member Ship',
          field: 'MbrShipName',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Action',
          cellRenderer: 'buttonRenderer',
          cellRendererParams: {
            onClick: this.onBtnClick.bind(this),
            OnDelete: this.OnDeleteMember.bind(this)
          }
        }];
      }
      _createClass(EmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
        }
      }, {
        key: "AddEmployee",
        value: function AddEmployee() {
          return this._router.navigate(["/AddEmployee"]);
        }
      }, {
        key: "onBtnClick",
        value: function onBtnClick(e) {
          /*alert(e.rowData);   */
          return this._router.navigate(["/AddEmployee"], {
            queryParams: e.rowData
          });
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          debugger;
          params.api.sizeColumnsToFit();
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          var dataValue;
          this.gymServices.GetAllMembers().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
              dataValue = result;
              params.api.setRowData(dataValue);
            } else {
              dataValue = "";
              params.api.setRowData(dataValue);
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "OnDeleteMember",
        value: function OnDeleteMember(data) {
          var _this24 = this;
          this.gymServices.DeleteMember(data.MbrId).subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
              alert('Member Deleted Successfully !');
              _this24.gymServices.GetAllMembers().subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
                  _this24.rowData = result;
                } else {
                  _this24.rowData = "";
                }
              }, function (error) {
                return alert(error.message);
              });
            } else {
              alert("Error !");
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }]);
      return EmployeeComponent;
    }();
    EmployeeComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };
    EmployeeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-employee',
      template: __importDefault(__webpack_require__( /*! raw-loader!./employee.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./employee.component.css */"./src/app/employee/employee.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], EmployeeComponent);

    /***/
  }),
  /***/"./src/app/fetch-data/fetch-data.component.ts": (
  /*!****************************************************!*\
    !*** ./src/app/fetch-data/fetch-data.component.ts ***!
    \****************************************************/
  /*! exports provided: FetchDataComponent */
  /***/
  function srcAppFetchDataFetchDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function () {
      return FetchDataComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var FetchDataComponent = /*#__PURE__*/_createClass(function FetchDataComponent(http, baseUrl) {
      var _this25 = this;
      _classCallCheck(this, FetchDataComponent);
      http.get(baseUrl + 'weatherforecast').subscribe(function (result) {
        _this25.forecasts = result;
      }, function (error) {
        return console.error(error);
      });
    });
    FetchDataComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };
    FetchDataComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-fetch-data',
      template: __importDefault(__webpack_require__( /*! raw-loader!./fetch-data.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html"))["default"]
    }), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])], FetchDataComponent);

    /***/
  }),
  /***/"./src/app/forgot-password/forgot-password.component.css": (
  /*!***************************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.component.css ***!
    \***************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppForgotPasswordForgotPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  }),
  /***/"./src/app/forgot-password/forgot-password.component.ts": (
  /*!**************************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.component.ts ***!
    \**************************************************************/
  /*! exports provided: ForgotPasswordComponent */
  /***/
  function srcAppForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(gymServices, formBuilder, _router) {
        _classCallCheck(this, ForgotPasswordComponent);
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
      }
      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /*this.nav.hide();*/
          this.ForgotPasswordform = this.formBuilder.group({
            EmailAdr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this26 = this;
          //return this._router.navigate(["/Employee"]);
          this.gymServices.ForgotPassword(this.ForgotPasswordform.controls.EmailAdr.value).subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result.access_token)) {
              return _this26._router.navigate(["/Login"]);
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }]);
      return ForgotPasswordComponent;
    }();
    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    ForgotPasswordComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-forgot-password',
      template: __importDefault(__webpack_require__( /*! raw-loader!./forgot-password.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./forgot-password.component.css */"./src/app/forgot-password/forgot-password.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_4__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ForgotPasswordComponent);

    /***/
  }),
  /***/"./src/app/gym-branches/gym-branches.component.css": (
  /*!*********************************************************!*\
    !*** ./src/app/gym-branches/gym-branches.component.css ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppGymBranchesGymBranchesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d5bS1icmFuY2hlcy9neW0tYnJhbmNoZXMuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  }),
  /***/"./src/app/gym-branches/gym-branches.component.ts": (
  /*!********************************************************!*\
    !*** ./src/app/gym-branches/gym-branches.component.ts ***!
    \********************************************************/
  /*! exports provided: GymBranchesComponent */
  /***/
  function srcAppGymBranchesGymBranchesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GymBranchesComponent", function () {
      return GymBranchesComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../btn-cell-renderer/btn-cell-renderer.component */"./src/app/btn-cell-renderer/btn-cell-renderer.component.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var GymBranchesComponent = /*#__PURE__*/function () {
      function GymBranchesComponent(gymServices, _router) {
        _classCallCheck(this, GymBranchesComponent);
        this.gymServices = gymServices;
        this._router = _router;
        this.frameworkComponents = {
          buttonRenderer: _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_3__["BtnCellRendererComponent"]
        };
        this.columnDefs = [{
          headerName: 'Name',
          field: 'test2',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Address',
          field: 'test3',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Contact No',
          field: 'test3',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Action',
          cellRenderer: 'buttonRenderer',
          cellRendererParam: {}
        }];
      }
      _createClass(GymBranchesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
        }
      }, {
        key: "AddEmployee",
        value: function AddEmployee() {
          return this._router.navigate(["/AddBranches"]);
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          var dataValue;
          dataValue = [{
            "test2": "Branch 1",
            "test3": "002"
          }, {
            "test2": "Branch 2",
            "test3": "004"
          }, {
            "test2": "Branch 3",
            "test3": "006"
          }, {
            "test2": "Branch 4",
            "test3": "008"
          }];
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
      }]);
      return GymBranchesComponent;
    }();
    GymBranchesComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    GymBranchesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-gym-branches',
      template: __importDefault(__webpack_require__( /*! raw-loader!./gym-branches.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/gym-branches/gym-branches.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./gym-branches.component.css */"./src/app/gym-branches/gym-branches.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], GymBranchesComponent);

    /***/
  }),
  /***/"./src/app/gym-expenses/gym-expenses.component.css": (
  /*!*********************************************************!*\
    !*** ./src/app/gym-expenses/gym-expenses.component.css ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppGymExpensesGymExpensesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d5bS1leHBlbnNlcy9neW0tZXhwZW5zZXMuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  }),
  /***/"./src/app/gym-expenses/gym-expenses.component.ts": (
  /*!********************************************************!*\
    !*** ./src/app/gym-expenses/gym-expenses.component.ts ***!
    \********************************************************/
  /*! exports provided: GymExpensesComponent */
  /***/
  function srcAppGymExpensesGymExpensesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GymExpensesComponent", function () {
      return GymExpensesComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../btn-cell-renderer/btn-cell-renderer.component */"./src/app/btn-cell-renderer/btn-cell-renderer.component.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    //import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
    var GymExpensesComponent = /*#__PURE__*/function () {
      function GymExpensesComponent(gymServices, _router, route) {
        _classCallCheck(this, GymExpensesComponent);
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.frameworkComponents = {
          buttonRenderer: _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__["BtnCellRendererComponent"]
        };
        this.columnDefs = [{
          headerName: 'Id',
          field: 'ExpensesId',
          Filter: true,
          enableSorting: true,
          sortable: true,
          hide: true
        }, {
          headerName: 'Date',
          field: 'ExpenseDate',
          Filter: true,
          enableSorting: true,
          sortable: true,
          cellRenderer: function cellRenderer(params) {
            var date = new Date(params.value);
            var formattedDate = date.toLocaleDateString('en-GB', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            });
            return formattedDate;
          },
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Category',
          field: 'Category',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Amount',
          field: 'Amount',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Description',
          field: 'Description',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Action',
          cellRenderer: 'buttonRenderer',
          cellRendererParams: {
            onClick: this.onBtnClick.bind(this),
            OnDelete: this.OnDeleteMember.bind(this)
          },
          filter: 'agTextColumnFilter'
        }];
      }
      _createClass(GymExpensesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
        }
      }, {
        key: "AddExpense",
        value: function AddExpense() {
          return this._router.navigate(["/AddExpenses"]);
        }
      }, {
        key: "onBtnClick",
        value: function onBtnClick(e) {
          return this._router.navigate(["/AddExpenses"], {
            queryParams: e.rowData
          });
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          var _this27 = this;
          params.api.sizeColumnsToFit();
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          var dataValue;
          this.gymServices.GetAllExpense().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
              dataValue = result;
              params.api.setRowData(dataValue);
            } else {
              _this27.rowData = null;
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "OnDeleteMember",
        value: function OnDeleteMember(params) {
          var _this28 = this;
          alert(params.ExpensesId);
          this.gymServices.DeleteExpense(params.ExpensesId).subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
              alert('Deleted Successfully !');
              return _this28._router.navigate(["/GymExpenses"]);
            } else {
              alert("Error !");
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }]);
      return GymExpensesComponent;
    }();
    GymExpensesComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };
    GymExpensesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-gym-expenses',
      template: __importDefault(__webpack_require__( /*! raw-loader!./gym-expenses.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/gym-expenses/gym-expenses.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./gym-expenses.component.css */"./src/app/gym-expenses/gym-expenses.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], GymExpensesComponent);

    /***/
  }),
  /***/"./src/app/gym-profile/gym-profile.component.css": (
  /*!*******************************************************!*\
    !*** ./src/app/gym-profile/gym-profile.component.css ***!
    \*******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppGymProfileGymProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d5bS1wcm9maWxlL2d5bS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";

    /***/
  }),
  /***/"./src/app/gym-profile/gym-profile.component.ts": (
  /*!******************************************************!*\
    !*** ./src/app/gym-profile/gym-profile.component.ts ***!
    \******************************************************/
  /*! exports provided: GymProfileComponent */
  /***/
  function srcAppGymProfileGymProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GymProfileComponent", function () {
      return GymProfileComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    //import { debug } from 'console';
    var GymProfileComponent = /*#__PURE__*/function () {
      function GymProfileComponent(gymServices, formBuilder, _router, route) {
        _classCallCheck(this, GymProfileComponent);
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.route = route;
        this.submitted = false;
        this.isShown = false; // hidden by default
      }
      _createClass(GymProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
          if (localStorage.getItem('isAdmin') != null && localStorage.getItem('isAdmin') == "false") {
            this.btnValue = "Activate Admin Profile";
          } else {
            this.btnValue = "De-Activate Admin Profile";
          }
          this.GymProfileForm = this.formBuilder.group({
            GymProfileId: [''],
            FName: [''],
            LName: [''],
            GymName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
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
            OldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            NewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            OTPValue: ['']
          });
          this.GetGymProfile();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(param) {
          var _this29 = this;
          debugger;
          this.submitted = true;
          if (param.target.value == "Update Profile") {
            this.GymProfileForm.controls['OldPassword'].disable();
            this.GymProfileForm.controls['NewPassword'].disable();
            this.GymProfileForm.controls['ConfirmPassword'].disable();
            if (!this.GymProfileForm.invalid) {
              this.gymServices.UpdateGymProfileDetails(this.GymProfileForm.value).subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                  alert("Data Updated.");
                  _this29.GymProfileForm.controls['OldPassword'].enable();
                  _this29.GymProfileForm.controls['NewPassword'].enable();
                  _this29.GymProfileForm.controls['ConfirmPassword'].enable();
                  return _this29._router.navigate(["/GymProfile"]);
                } else {
                  _this29.GymProfileForm.controls['OldPassword'].enable();
                  alert("Error !");
                }
              }, function (error) {
                return alert(error.message);
              });
            }
          } else if (param.target.value == "Activate Admin Profile") {
            this.GymProfileForm.controls['OldPassword'].disable();
            this.GymProfileForm.controls['NewPassword'].disable();
            this.GymProfileForm.controls['ConfirmPassword'].disable();
            if (!this.GymProfileForm.invalid) {
              this.isShown = true;
            }
          } else if (param.target.value == "De-Activate Admin Profile") {
            this.GymProfileForm.controls['OldPassword'].disable();
            this.GymProfileForm.controls['NewPassword'].disable();
            this.GymProfileForm.controls['ConfirmPassword'].disable();
            if (!this.GymProfileForm.invalid) {
              this.isShown = true;
              this.btnValue = "Activate Admin Profile";
              localStorage.setItem("isAdmin", 'false');
              return this._router.navigate(["/Home"]);
            }
          } else {
            // Update 
            if (!this.GymProfileForm.invalid) {
              this.gymServices.UpdatePassowrd(this.GymProfileForm.value).subscribe(function (result) {
                if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                  alert("Password Updated.");
                  return _this29._router.navigate(["/GymProfile"]);
                } else {
                  alert("Incorrect Creiditials");
                }
              }, function (error) {
                return alert(error.message);
              });
            }
          }
        }
      }, {
        key: "GetGymProfile",
        value: function GetGymProfile() {
          var _this30 = this;
          debugger;
          this.gymServices.GetGymProfileDetails().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
              _this30.GymProfileId = result.GymProfileId;
              _this30.FName = result.FName;
              _this30.LName = result.LName;
              _this30.GymName = result.GymName;
              _this30.Address = result.Address;
              _this30.EMailId = result.EMailId;
              _this30.MbrShipName = result.MbrShipName;
              _this30.PaidAmt = result.PaidAmt;
              _this30.mbrShipStatus = result.mbrShipStatus;
              _this30.MbrshipStartDt = result.MbrshipStartDt;
              _this30.MbrshipEndDt = result.MbrshipEndDt;
              _this30.GSTNo = result.GSTNo;
              _this30.MobileNumber = result.MobileNumber;
              _this30.Website = result.Website;
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "numberOnly",
        value: function numberOnly(event) {
          var charCode = event.which ? event.which : event.keyCode;
          if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
          }
          return true;
        }
      }, {
        key: "VerifyOTP",
        value: function VerifyOTP(event) {
          var _this31 = this;
          if (this.OTPValue.length + 1 == 6) {
            // Verify OTP From DB
            if (!this.GymProfileForm.invalid) {
              this.gymServices.VerifyOTP(this.OTPValue + event.key).subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                  if (result) {
                    _this31.isShown = false;
                    _this31.btnValue = "De-Activate Admin Profile";
                    localStorage.setItem("isAdmin", 'true');
                    return _this31._router.navigate(["/Home"]);
                  } else {}
                } else {
                  alert("Incorrect OTP");
                }
              }, function (error) {
                return alert(error.message);
              });
            }
          }
          return true;
        }
      }, {
        key: "fval",
        get: function get() {
          return this.GymProfileForm.controls;
        }
      }]);
      return GymProfileComponent;
    }();
    GymProfileComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };
    GymProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-gym-profile',
      template: __importDefault(__webpack_require__( /*! raw-loader!./gym-profile.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/gym-profile/gym-profile.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./gym-profile.component.css */"./src/app/gym-profile/gym-profile.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], GymProfileComponent);

    /***/
  }),
  /***/"./src/app/home/home.component.css": (
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/
  /*! exports provided: default */
  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/home/home.component.ts": (
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/
  /*! exports provided: HomeComponent */
  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(gymServices, _router, route) {
        _classCallCheck(this, HomeComponent);
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.GymMember = 0;
        this.Trainer = 0;
        this.PT = 0;
        this.Enquiry = 0;
        this.MbrShipExpiring = 0;
        this.saleData = [];
        this.columnDefs = [{
          headerName: 'Id',
          field: 'MbrId',
          Filter: true,
          enableSorting: true,
          sortable: true,
          hide: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Name',
          field: 'MbrName',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Enquiry for',
          field: 'EnquiryFor',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Expected date to join ',
          field: 'ExpectedDtToJoin',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Enquiry Date',
          field: 'enquiryDate',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Last follow up',
          field: 'enquiryDate',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }];
        this.columnDefs1 = [{
          headerName: 'MbrId',
          field: 'Id',
          Filter: true,
          enableSorting: true,
          hide: true
        }, {
          headerName: 'Name',
          field: 'MbrName',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Designaion',
          field: 'MbrType',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Mobile No',
          field: 'MbrMob',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'BIRTHDAY',
          field: 'BIRTHDAY',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'AGE',
          field: 'AGE_NOW',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }];
      }
      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          var _this32 = this;
          params.api.sizeColumnsToFit();
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          var dataValue;
          this.gymServices.GetDashboardData().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
              debugger;
              if (result.countModel != null) {
                _this32.GymMember = result.countModel.filter(function (x) {
                  return x.MbrType == "GymMember";
                })[0].count; //(result.countModel['GymMember'] == undefined || result.countModel['GymMember'] == null) ? 0 : result.countModel['GymMember'].count;
                _this32.Trainer = result.countModel.filter(function (x) {
                  return x.MbrType == "Trainer";
                })[0].count;
                _this32.PT = result.countModel.filter(function (x) {
                  return x.MbrType == "PT";
                })[0].count;
                _this32.Enquiry = result.countModel.filter(function (x) {
                  return x.MbrType == "Enquiry";
                })[0].count;
                _this32.MbrShipExpiring = result.countModel.filter(function (x) {
                  return x.MbrType == "MbrShipExpiring";
                })[0].count;
                _this32.Events = '0';
              }
              dataValue = result.enquiryModel;
              params.api.setRowData(dataValue);
              if (result.salesModel) {
                for (var n = 0; n < result.salesModel.length; ++n) {
                  _this32.saleData.push({
                    "name": result.salesModel[n].Months,
                    "value": Number(result.salesModel[n].Amt)
                  });
                }
              }
              // ngs chart does not detect the data change sp we add below line
              _this32.saleData = _toConsumableArray(_this32.saleData);
            } else {
              dataValue = "";
              params.api.setRowData(dataValue);
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "onGridReady1",
        value: function onGridReady1(params) {
          params.api.sizeColumnsToFit();
          this.gridApi1 = params.api;
          this.gridColumnApi1 = params.columnApi;
          this.gymServices.GetUpcomingBirthdays().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
              params.api.setRowData(result);
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }]);
      return HomeComponent;
    }();
    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };
    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__( /*! raw-loader!./home.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./home.component.css */"./src/app/home/home.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], HomeComponent);

    /***/
  }),
  /***/"./src/app/login/login.component.css": (
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/
  /*! exports provided: default */
  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";

    /***/
  }),
  /***/"./src/app/login/login.component.ts": (
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/
  /*! exports provided: LoginComponent */
  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(gymServices, formBuilder, _router) {
        _classCallCheck(this, LoginComponent);
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
      } /*, public nav: NavMenuComponent*/
      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginform = this.formBuilder.group({
            MobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this33 = this;
          if (this.loginform.controls.MobileNo.value == undefined || this.loginform.controls.MobileNo.value.length != 10) {
            alert("Please provide valid 10 digit number");
            return;
          }
          if (this.loginform.controls.password.value == undefined || this.loginform.controls.password.value.length != 5) {
            alert("Invalid password");
            return;
          }
          this.gymServices.login(this.loginform.controls.MobileNo.value, this.loginform.controls.password.value).subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result.access_token)) {
              localStorage.setItem("token", result.access_token);
              localStorage.setItem("isAdmin", 'false');
              return _this33._router.navigate(["/Home"]);
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "numberOnly",
        value: function numberOnly(event) {
          var charCode = event.which ? event.which : event.keyCode;
          if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
          }
          return true;
        }
      }, {
        key: "fval",
        get: function get() {
          return this.loginform.controls;
        }
      }]);
      return LoginComponent;
    }();
    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-login',
      template: __importDefault(__webpack_require__( /*! raw-loader!./login.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./login.component.css */"./src/app/login/login.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], LoginComponent);

    /***/
  }),
  /***/"./src/app/membership-history/membership-history.component.css": (
  /*!*********************************************************************!*\
    !*** ./src/app/membership-history/membership-history.component.css ***!
    \*********************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppMembershipHistoryMembershipHistoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnNoaXAtaGlzdG9yeS9tZW1iZXJzaGlwLWhpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  }),
  /***/"./src/app/membership-history/membership-history.component.ts": (
  /*!********************************************************************!*\
    !*** ./src/app/membership-history/membership-history.component.ts ***!
    \********************************************************************/
  /*! exports provided: MembershipHistoryComponent */
  /***/
  function srcAppMembershipHistoryMembershipHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MembershipHistoryComponent", function () {
      return MembershipHistoryComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../btn-cell-renderer/btn-cell-renderer.component */"./src/app/btn-cell-renderer/btn-cell-renderer.component.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var MembershipHistoryComponent = /*#__PURE__*/function () {
      function MembershipHistoryComponent(gymServices, _router, route, formBuilder) {
        _classCallCheck(this, MembershipHistoryComponent);
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.formBuilder = formBuilder;
        this._Members = [];
        this.frameworkComponents = {
          buttonRenderer: _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_5__["BtnCellRendererComponent"]
        };
        this.columnDefs = [{
          headerName: 'Id',
          field: 'MbrId',
          Filter: true,
          enableSorting: true,
          sortable: true,
          hide: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Name',
          field: 'MbrName',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Batch',
          field: 'MbrBatch',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Membership Name',
          field: 'MbrShipName',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Membership Amt',
          field: 'MbrShipAmt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Paid Amt',
          field: 'PaidAmt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Paid By',
          field: 'PaidBy',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Paid Dt',
          field: 'PaidDt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Start Dt',
          field: 'MbrshipStartDt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'End Dt',
          field: 'MbrshipEndDt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Type',
          field: 'MembershipType',
          filter: 'agTextColumnFilter'
        }];
      }
      _createClass(MembershipHistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
          this.MbrHistoryForm = this.formBuilder.group({
            PtMemberId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]]
          });
          this.GetAllMembers();
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          this.rowData = '';
        }
      }, {
        key: "GetAllMembers",
        value: function GetAllMembers() {
          var _this34 = this;
          debugger;
          this.gymServices.GetAllMembers().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
              _this34._Members = result;
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "showPersonalTrainingPlans",
        value: function showPersonalTrainingPlans(value) {
          var _this35 = this;
          var MemberId = value;
          this.gymServices.GetGymMemberHistoryById(MemberId).subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
              _this35.rowData = result;
            } else {
              _this35.rowData = null;
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }]);
      return MembershipHistoryComponent;
    }();
    MembershipHistoryComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };
    MembershipHistoryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-membership-history',
      template: __importDefault(__webpack_require__( /*! raw-loader!./membership-history.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/membership-history/membership-history.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./membership-history.component.css */"./src/app/membership-history/membership-history.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], MembershipHistoryComponent);

    /***/
  }),
  /***/"./src/app/membership-plan/membership-plan.component.css": (
  /*!***************************************************************!*\
    !*** ./src/app/membership-plan/membership-plan.component.css ***!
    \***************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppMembershipPlanMembershipPlanComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnNoaXAtcGxhbi9tZW1iZXJzaGlwLXBsYW4uY29tcG9uZW50LmNzcyJ9 */";

    /***/
  }),
  /***/"./src/app/membership-plan/membership-plan.component.ts": (
  /*!**************************************************************!*\
    !*** ./src/app/membership-plan/membership-plan.component.ts ***!
    \**************************************************************/
  /*! exports provided: MembershipPlanComponent */
  /***/
  function srcAppMembershipPlanMembershipPlanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MembershipPlanComponent", function () {
      return MembershipPlanComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../btn-cell-renderer/btn-cell-renderer.component */"./src/app/btn-cell-renderer/btn-cell-renderer.component.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var MembershipPlanComponent = /*#__PURE__*/function () {
      function MembershipPlanComponent(gymServices, _router) {
        _classCallCheck(this, MembershipPlanComponent);
        this.gymServices = gymServices;
        this._router = _router;
        this.frameworkComponents = {
          buttonRenderer: _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__["BtnCellRendererComponent"]
        };
        this.columnDefs = [{
          headerName: 'Name',
          field: 'MbrShipName',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Amount',
          field: 'MbrShipAmt',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Days',
          field: 'MbrShipDurationInDays',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Start Date',
          field: 'StartDt',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'End Date',
          field: 'EndDt',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Description',
          field: 'Description',
          Filter: true,
          enableSorting: true,
          sortable: true
        }, {
          headerName: 'Active/In-Active',
          field: 'Active',
          Filter: true,
          enableSorting: true,
          sortable: true,
          valueGetter: function valueGetter(params) {
            if (params.data.Active == true) {
              return "Active";
            } else {
              return "In-Active";
            }
          },
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Action',
          cellRenderer: 'buttonRenderer',
          cellRendererParams: {
            onClick: this.onBtnClick.bind(this),
            OnDelete: this.OnDeletePlan.bind(this)
          }
        }];
      }
      _createClass(MembershipPlanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
        }
      }, {
        key: "onBtnClick",
        value: function onBtnClick(e) {
          if (e == undefined) return this._router.navigate(["/AddMbrPlans"]);else return this._router.navigate(["/AddMbrPlans"], {
            queryParams: e.rowData
          });
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          params.api.sizeColumnsToFit();
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          var dataValue;
          this.gymServices.GetAllMemberShipPlan().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
              dataValue = result;
              params.api.setRowData(dataValue);
            } else {
              dataValue = "No Data Available";
              params.api.setRowData(dataValue);
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "OnDeletePlan",
        value: function OnDeletePlan(mbrId) {
          var _this36 = this;
          this.gymServices.DeletePlan(mbrId).subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
              alert('Member Deleted Successfully !');
              return _this36._router.navigate(["/Employee"]);
            } else {
              alert("Error !");
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }]);
      return MembershipPlanComponent;
    }();
    MembershipPlanComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };
    MembershipPlanComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-membership-plan',
      template: __importDefault(__webpack_require__( /*! raw-loader!./membership-plan.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/membership-plan/membership-plan.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./membership-plan.component.css */"./src/app/membership-plan/membership-plan.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], MembershipPlanComponent);

    /***/
  }),
  /***/"./src/app/nav-menu/nav-menu.component.css": (
  /*!*************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.css ***!
    \*************************************************/
  /*! exports provided: default */
  /***/
  function srcAppNavMenuNavMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a.navbar-brand {\r\n   \r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n.container{\r\n    margin-left:20px !important;\r\n    max-width:100% !important;\r\n\r\n}\r\n\r\n.headerTitle\r\n{\r\n    margin-right:110px;\r\n    margin-left:20px;\r\n    font-weight:bold;\r\n    width:15%;\r\n}\r\n\r\nul li ul li a:hover {\r\n    background-color: #87AFC7 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHlCQUF5Qjs7QUFFN0I7O0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICAgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJveC1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgLjI1cmVtIC43NXJlbSByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4uaGVhZGVyVGl0bGVcclxue1xyXG4gICAgbWFyZ2luLXJpZ2h0OjExMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICB3aWR0aDoxNSU7XHJcbn1cclxudWwgbGkgdWwgbGkgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdBRkM3ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";

    /***/
  }),
  /***/"./src/app/nav-menu/nav-menu.component.ts": (
  /*!************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.ts ***!
    \************************************************/
  /*! exports provided: NavMenuComponent */
  /***/
  function srcAppNavMenuNavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
      return NavMenuComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var NavMenuComponent = /*#__PURE__*/function () {
      function NavMenuComponent(_router, gymServices) {
        _classCallCheck(this, NavMenuComponent);
        this._router = _router;
        this.gymServices = gymServices;
        this.isShown = true;
        this.visible = false;
      }
      _createClass(NavMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isShown = JSON.parse(localStorage.getItem('isAdmin'));
          this.GetGymProfile();
        }
      }, {
        key: "collapse",
        value: function collapse() {
          this.visible = false;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.visible = !this.visible;
        }
      }, {
        key: "hide",
        value: function hide() {
          this.visible = false;
        }
      }, {
        key: "show",
        value: function show() {
          this.visible = true;
        }
      }, {
        key: "logout",
        value: function logout() {
          if (confirm("Are you sure to logout ?")) {
            localStorage.clear();
            return this._router.navigate([""]);
          }
        }
      }, {
        key: "GetGymProfile",
        value: function GetGymProfile() {
          var _this37 = this;
          debugger;
          this.gymServices.GetGymProfileDetails().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
              _this37.GymName = result.GymName;
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }]);
      return NavMenuComponent;
    }();
    NavMenuComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_3__["GymService"]
      }];
    };
    NavMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-nav-menu',
      template: __importDefault(__webpack_require__( /*! raw-loader!./nav-menu.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./nav-menu.component.css */"./src/app/nav-menu/nav-menu.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_gym_service__WEBPACK_IMPORTED_MODULE_3__["GymService"]])], NavMenuComponent);

    /***/
  }),
  /***/"./src/app/payments/payments.component.css": (
  /*!*************************************************!*\
    !*** ./src/app/payments/payments.component.css ***!
    \*************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPaymentsPaymentsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */";

    /***/
  }),
  /***/"./src/app/payments/payments.component.ts": (
  /*!************************************************!*\
    !*** ./src/app/payments/payments.component.ts ***!
    \************************************************/
  /*! exports provided: PaymentsComponent */
  /***/
  function srcAppPaymentsPaymentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function () {
      return PaymentsComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    //import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
    var PaymentsComponent = /*#__PURE__*/function () {
      function PaymentsComponent(gymServices, _router, route) {
        _classCallCheck(this, PaymentsComponent);
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.columnDefs = [{
          headerName: 'Id',
          field: 'MbrId',
          Filter: true,
          enableSorting: true,
          sortable: true,
          hide: true
        }, {
          headerName: 'Name',
          field: 'MbrName',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Designaion',
          field: 'MbrType',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Plan',
          field: 'MbrShipName',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Amount',
          field: 'MbrShipAmt',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Paid Amt',
          field: 'PaidAmt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Paid Dt',
          field: 'PaidDt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Member Ship',
          field: 'MembershipType',
          filter: 'agTextColumnFilter'
        }];
      }
      _createClass(PaymentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          params.api.sizeColumnsToFit();
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          var dataValue;
          this.gymServices.GetPaymentDetails().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
              dataValue = result;
              params.api.setRowData(dataValue);
            } else {
              dataValue = "";
              params.api.setRowData(dataValue);
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }]);
      return PaymentsComponent;
    }();
    PaymentsComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };
    PaymentsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-payments',
      template: __importDefault(__webpack_require__( /*! raw-loader!./payments.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/payments/payments.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./payments.component.css */"./src/app/payments/payments.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], PaymentsComponent);

    /***/
  }),
  /***/"./src/app/ptdetails/ptdetails.component.css": (
  /*!***************************************************!*\
    !*** ./src/app/ptdetails/ptdetails.component.css ***!
    \***************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPtdetailsPtdetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B0ZGV0YWlscy9wdGRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  }),
  /***/"./src/app/ptdetails/ptdetails.component.ts": (
  /*!**************************************************!*\
    !*** ./src/app/ptdetails/ptdetails.component.ts ***!
    \**************************************************/
  /*! exports provided: PTDetailsComponent */
  /***/
  function srcAppPtdetailsPtdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PTDetailsComponent", function () {
      return PTDetailsComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../btn-cell-renderer/btn-cell-renderer.component */"./src/app/btn-cell-renderer/btn-cell-renderer.component.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    //import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
    var PTDetailsComponent = /*#__PURE__*/function () {
      function PTDetailsComponent(gymServices, _router, route) {
        _classCallCheck(this, PTDetailsComponent);
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.frameworkComponents = {
          buttonRenderer: _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__["BtnCellRendererComponent"]
        };
        this.columnDefs = [{
          headerName: 'Id',
          field: 'MbrId',
          Filter: true,
          enableSorting: true,
          sortable: true,
          hide: true
        }, {
          headerName: 'MbrUserId',
          field: 'MbrUserId',
          Filter: true,
          enableSorting: true,
          sortable: true,
          hide: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'MbrShipId',
          field: 'MbrShipId',
          Filter: true,
          enableSorting: true,
          sortable: true,
          hide: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'TrainerId',
          field: 'TrainerId',
          Filter: true,
          enableSorting: true,
          sortable: true,
          hide: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Name',
          field: 'MbrName',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Mobile No',
          field: 'MbrMob',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Member Ship',
          field: 'MbrType',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Paid Amount',
          field: 'PaidAmt',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Paid By',
          field: 'PaidBy',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Paid Dt',
          field: 'PaidDt',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Start Dt',
          field: 'MbrshipStartDt',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'End sDt',
          field: 'MbrshipEndDt',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Action',
          cellRenderer: 'buttonRenderer',
          cellRendererParams: {
            onClick: this.onBtnClick.bind(this),
            OnDelete: this.OnDeleteMember.bind(this)
          }
        }];
      }
      _createClass(PTDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
        }
      }, {
        key: "AddPT",
        value: function AddPT() {
          return this._router.navigate(["/AddPTDetails"]);
        }
      }, {
        key: "onBtnClick",
        value: function onBtnClick(e) {
          /*alert(e.rowData);   */
          return this._router.navigate(["/AddPTDetails"], {
            queryParams: e.rowData
          });
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          debugger;
          params.api.sizeColumnsToFit();
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          var dataValue;
          this.gymServices.GetAllPTMembers().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
              dataValue = result;
              params.api.setRowData(dataValue);
            } else {
              dataValue = "";
              params.api.setRowData(dataValue);
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "OnDeleteMember",
        value: function OnDeleteMember(data) {
          var _this38 = this;
          this.gymServices.DeletePTMembers(data.MbrUserId).subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
              alert('Member Deleted Successfully !');
              _this38.gymServices.GetAllPTMembers().subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
                  _this38.rowData = result;
                } else {
                  _this38.rowData = "";
                }
              }, function (error) {
                return alert(error.message);
              });
            } else {
              alert("Error !");
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }]);
      return PTDetailsComponent;
    }();
    PTDetailsComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };
    PTDetailsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-ptdetails',
      template: __importDefault(__webpack_require__( /*! raw-loader!./ptdetails.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/ptdetails/ptdetails.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./ptdetails.component.css */"./src/app/ptdetails/ptdetails.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], PTDetailsComponent);

    /***/
  }),
  /***/"./src/app/remaining-balance/remaining-balance.component.css": (
  /*!*******************************************************************!*\
    !*** ./src/app/remaining-balance/remaining-balance.component.css ***!
    \*******************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppRemainingBalanceRemainingBalanceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbWFpbmluZy1iYWxhbmNlL3JlbWFpbmluZy1iYWxhbmNlLmNvbXBvbmVudC5jc3MifQ== */";

    /***/
  }),
  /***/"./src/app/remaining-balance/remaining-balance.component.ts": (
  /*!******************************************************************!*\
    !*** ./src/app/remaining-balance/remaining-balance.component.ts ***!
    \******************************************************************/
  /*! exports provided: RemainingBalanceComponent */
  /***/
  function srcAppRemainingBalanceRemainingBalanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RemainingBalanceComponent", function () {
      return RemainingBalanceComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _Renders_edit_btn_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../Renders/edit-btn-renderer.component */"./src/app/Renders/edit-btn-renderer.component.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var RemainingBalanceComponent = /*#__PURE__*/function () {
      function RemainingBalanceComponent(gymServices, _router, route) {
        _classCallCheck(this, RemainingBalanceComponent);
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.frameworkComponents = {
          buttonRenderer: _Renders_edit_btn_renderer_component__WEBPACK_IMPORTED_MODULE_4__["EditBtnRendererComponent"]
        };
        this.columnDefs = [{
          headerName: 'Id',
          field: 'MbrId',
          Filter: true,
          enableSorting: true,
          sortable: true,
          hide: true
        }, {
          headerName: 'Name',
          field: 'MbrName',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Mobile',
          field: 'MbrMob',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Membership Plan',
          field: 'MbrShipName',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Batch',
          field: 'MbrBatch',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Last Paid Amount',
          field: 'lastPaidAmt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Last Payment Date',
          field: 'PaidDt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Last Paid By',
          field: 'LastPaidBy',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Remaining Balance',
          field: 'RemBalance',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Membership StartDt',
          field: 'MbrshipStartDt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Membership EndDt',
          field: 'MbrshipEndDt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Payment of',
          field: 'MembershipType',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Action',
          cellRenderer: 'buttonRenderer',
          cellRendererParams: {
            onClick: this.onBtnClick.bind(this)
          }
        }];
      }
      _createClass(RemainingBalanceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
        }
      }, {
        key: "onBtnClick",
        value: function onBtnClick(e) {
          /*alert(e.rowData);   */
          return this._router.navigate(["/AddRemainingBalance"], {
            queryParams: e.rowData
          });
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          params.api.sizeColumnsToFit();
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          var dataValue;
          this.gymServices.GetAllMemberShipPlanUser().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
              dataValue = result;
              params.api.setRowData(dataValue);
            } else {
              dataValue = "";
              params.api.setRowData(dataValue);
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }]);
      return RemainingBalanceComponent;
    }();
    RemainingBalanceComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };
    RemainingBalanceComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-remaining-balance',
      template: __importDefault(__webpack_require__( /*! raw-loader!./remaining-balance.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/remaining-balance/remaining-balance.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./remaining-balance.component.css */"./src/app/remaining-balance/remaining-balance.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], RemainingBalanceComponent);

    /***/
  }),
  /***/"./src/app/renewal-membership/renewal-membership.component.css": (
  /*!*********************************************************************!*\
    !*** ./src/app/renewal-membership/renewal-membership.component.css ***!
    \*********************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppRenewalMembershipRenewalMembershipComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbmV3YWwtbWVtYmVyc2hpcC9yZW5ld2FsLW1lbWJlcnNoaXAuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  }),
  /***/"./src/app/renewal-membership/renewal-membership.component.ts": (
  /*!********************************************************************!*\
    !*** ./src/app/renewal-membership/renewal-membership.component.ts ***!
    \********************************************************************/
  /*! exports provided: RenewalMembershipComponent */
  /***/
  function srcAppRenewalMembershipRenewalMembershipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenewalMembershipComponent", function () {
      return RenewalMembershipComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _Renders_btn_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../Renders/btn-renderer.component */"./src/app/Renders/btn-renderer.component.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var RenewalMembershipComponent = /*#__PURE__*/function () {
      function RenewalMembershipComponent(gymServices, _router, route) {
        _classCallCheck(this, RenewalMembershipComponent);
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.frameworkComponents = {
          buttonRenderer: _Renders_btn_renderer_component__WEBPACK_IMPORTED_MODULE_4__["BtnRendererComponent"]
        };
        this.columnDefs = [{
          headerName: 'Id',
          field: 'MbrId',
          Filter: true,
          enableSorting: true,
          sortable: true,
          hide: true
        }, {
          headerName: 'Name',
          field: 'MbrName',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Mobile No',
          field: 'MbrMob',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Membership Plan',
          field: 'MbrShipName',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Batch',
          field: 'MbrBatch',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Membership Type',
          field: 'MembershipType',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Last Payment',
          field: 'PaidAmt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Last Payment Date',
          field: 'PaidDt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Expire Date',
          field: 'MbrshipEndDt',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Action',
          cellRenderer: 'buttonRenderer',
          cellRendererParams: {
            onClick: this.onBtnClick.bind(this),
            label: 'Click'
          }
        }];
      }
      _createClass(RenewalMembershipComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
        }
      }, {
        key: "onBtnClick",
        value: function onBtnClick(e) {
          return this._router.navigate(["/RenewalPayments"], {
            queryParams: e.rowData
          });
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          params.api.sizeColumnsToFit();
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          var dataValue;
          this.gymServices.GetMembershipGoingtoExxpiredMembers().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNull"])(result)) {
              dataValue = result;
              params.api.setRowData(dataValue);
            } else {
              dataValue = "";
              params.api.setRowData(dataValue);
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }]);
      return RenewalMembershipComponent;
    }();
    RenewalMembershipComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };
    RenewalMembershipComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-renewal-membership',
      template: __importDefault(__webpack_require__( /*! raw-loader!./renewal-membership.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/renewal-membership/renewal-membership.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./renewal-membership.component.css */"./src/app/renewal-membership/renewal-membership.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_1__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], RenewalMembershipComponent);

    /***/
  }),
  /***/"./src/app/renewal-payments/renewal-payments.component.css": (
  /*!*****************************************************************!*\
    !*** ./src/app/renewal-payments/renewal-payments.component.css ***!
    \*****************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppRenewalPaymentsRenewalPaymentsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbmV3YWwtcGF5bWVudHMvcmVuZXdhbC1wYXltZW50cy5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/renewal-payments/renewal-payments.component.ts": (
  /*!****************************************************************!*\
    !*** ./src/app/renewal-payments/renewal-payments.component.ts ***!
    \****************************************************************/
  /*! exports provided: RenewalPaymentsComponent */
  /***/
  function srcAppRenewalPaymentsRenewalPaymentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenewalPaymentsComponent", function () {
      return RenewalPaymentsComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var RenewalPaymentsComponent = /*#__PURE__*/function () {
      function RenewalPaymentsComponent(gymServices, formBuilder, _router, route, datepipe) {
        _classCallCheck(this, RenewalPaymentsComponent);
        this.gymServices = gymServices;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.route = route;
        this.datepipe = datepipe;
        this._MbrPlans = [];
        this.submitted = false;
      }
      _createClass(RenewalPaymentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this39 = this;
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
          this.GetAllMemberShipPlan();
          this.RenewalPaymentForm = this.formBuilder.group({
            MbrId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrBatch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrShipId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrShipCharges: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Days: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PaidAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PaidBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PaidDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrshipStartDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrshipEndDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MembershipType: ['']
          });
          this.route.queryParams.subscribe(function (params) {
            debugger;
            if (params != null && params.MbrName != undefined) {
              _this39.MbrId = params.MbrId;
              _this39.MbrName = params.MbrName;
              _this39.MbrBatch = params.MbrBatch;
              _this39.MbrName = params.MbrName;
            }
          });
        }
      }, {
        key: "onDateChange",
        value: function onDateChange(value) {
          this.date = new Date(value.srcElement.value);
          this.date.setDate(this.date.getDate() + +this.Days);
          this.MbrshipEndDt = this.datepipe.transform(this.date, 'yyyy-MM-dd');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this40 = this;
          this.submitted = true;
          if (!this.RenewalPaymentForm.invalid) {
            this.RenewalPaymentForm.value["MembershipType"] = "GymMembership";
            this.gymServices.AddPTMembers(this.RenewalPaymentForm.value).subscribe(function (result) {
              if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                alert(result);
                return _this40._router.navigate(["/RenewalMembership"]);
              } else {
                alert("Incorrect Creiditials");
              }
            }, function (error) {
              return alert(error.message);
            });
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          return this._router.navigate(["/RenewalMembership"]);
        }
      }, {
        key: "fval",
        get: function get() {
          return this.RenewalPaymentForm.controls;
        }
      }, {
        key: "GetAllMemberShipPlan",
        value: function GetAllMemberShipPlan() {
          var _this41 = this;
          this.gymServices.GetAllMemberShipPlan().subscribe(function (res) {
            _this41._MbrPlans = res;
            // data contains actual array of users
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "showMemberShipPlan",
        value: function showMemberShipPlan(value) {
          this.MbrShipCharges = this._MbrPlans.find(function (x) {
            return x.MbrShipId == value;
          }).MbrShipAmt.toString();
          this.Days = this._MbrPlans.find(function (x) {
            return x.MbrShipId == value;
          }).MbrShipDurationInDays.toString();
        }
      }, {
        key: "numberOnly",
        value: function numberOnly(event) {
          var charCode = event.which ? event.which : event.keyCode;
          if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
          }
          return true;
        }
      }]);
      return RenewalPaymentsComponent;
    }();
    RenewalPaymentsComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
      }];
    };
    RenewalPaymentsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-renewal-payments',
      template: __importDefault(__webpack_require__( /*! raw-loader!./renewal-payments.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/renewal-payments/renewal-payments.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./renewal-payments.component.css */"./src/app/renewal-payments/renewal-payments.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])], RenewalPaymentsComponent);

    /***/
  }),
  /***/"./src/app/salary-master/salary-master.component.css": (
  /*!***********************************************************!*\
    !*** ./src/app/salary-master/salary-master.component.css ***!
    \***********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSalaryMasterSalaryMasterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGFyeS1tYXN0ZXIvc2FsYXJ5LW1hc3Rlci5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/salary-master/salary-master.component.ts": (
  /*!**********************************************************!*\
    !*** ./src/app/salary-master/salary-master.component.ts ***!
    \**********************************************************/
  /*! exports provided: SalaryMasterComponent */
  /***/
  function srcAppSalaryMasterSalaryMasterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SalaryMasterComponent", function () {
      return SalaryMasterComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../btn-cell-renderer/btn-cell-renderer.component */"./src/app/btn-cell-renderer/btn-cell-renderer.component.ts");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var SalaryMasterComponent = /*#__PURE__*/function () {
      function SalaryMasterComponent(gymServices, _router, route, formBuilder) {
        _classCallCheck(this, SalaryMasterComponent);
        this.gymServices = gymServices;
        this._router = _router;
        this.route = route;
        this.formBuilder = formBuilder;
        this._Members = [];
        this.isShown = false; // hidden by default
        this.frameworkComponents = {
          buttonRenderer: _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__["BtnCellRendererComponent"]
        };
        this.columnDefs = [{
          headerName: 'Id',
          field: 'MbrId',
          Filter: true,
          enableSorting: true,
          sortable: true,
          hide: true
        }, {
          headerName: 'SalMst_Id',
          field: 'SalMst_Id',
          Filter: true,
          enableSorting: true,
          sortable: true,
          hide: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'MbrName',
          field: 'MbrName',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'MbrType',
          field: 'MbrType',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'SalMonth',
          field: 'SalMonth',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'SalPaidDt',
          field: 'SalPaidDt',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'TotalSal',
          field: 'TotalSal',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'PaidSal',
          field: 'PaidSal',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'TotalLeaves',
          field: 'TotalLeaves',
          Filter: true,
          enableSorting: true,
          sortable: true,
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Comment',
          field: 'Comment',
          filter: 'agTextColumnFilter'
        }, {
          headerName: 'Action',
          cellRenderer: 'buttonRenderer',
          cellRendererParams: {
            onClick: this.onBtnClick.bind(this),
            OnDelete: this.OnDeleteSalaryMst.bind(this)
          }
        }];
      }
      _createClass(SalaryMasterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
          this.SalaryDetailsForm = this.formBuilder.group({
            chkMbr: [''],
            MemberId: ['']
          });
        }
      }, {
        key: "AddSalary",
        value: function AddSalary() {
          return this._router.navigate(["/AddSalary"]);
        }
      }, {
        key: "onBtnClick",
        value: function onBtnClick(e) {
          /*alert(e.rowData);   */
          return this._router.navigate(["/AddSalary"], {
            queryParams: e.rowData
          });
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          debugger;
          params.api.sizeColumnsToFit();
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          var dataValue;
          this.gymServices.GetSalaryMstList().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
              dataValue = result;
              params.api.setRowData(dataValue);
            } else {
              dataValue = "";
              params.api.setRowData(dataValue);
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "OnDeleteSalaryMst",
        value: function OnDeleteSalaryMst(data) {
          var _this42 = this;
          this.gymServices.DeleteMembersSalaryMst(data.SalMst_Id).subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
              alert('Deleted Successfully !');
              _this42.gymServices.GetSalaryMstList().subscribe(function (result) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                  _this42.rowData = result;
                } else {
                  _this42.rowData = "";
                }
              }, function (error) {
                return alert(error.message);
              });
            } else {
              alert("Error !");
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "changed",
        value: function changed(evt) {
          this.rowData = null;
          if (evt.target.checked) {
            this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrType'], false);
            this.GetAllMembers();
            this.isShown = true;
          } else {
            this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrType'], true);
            this.GetSalaryMst();
            this.isShown = false;
          }
        }
      }, {
        key: "GetSalaryMst",
        value: function GetSalaryMst() {
          var _this43 = this;
          this.gymServices.GetSalaryMstList().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
              _this43.rowData = result;
            } else {
              _this43.rowData = null;
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "GetSalaryMstByMbr",
        value: function GetSalaryMstByMbr(value) {
          var _this44 = this;
          this.gymServices.GetSalaryMstListByMbr(value).subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
              _this44.rowData = result;
            } else {
              _this44.rowData = '';
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "GetAllMembers",
        value: function GetAllMembers() {
          var _this45 = this;
          debugger;
          this.gymServices.GetAllMembers().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
              _this45._Members = result.filter(function (x) {
                return x.MbrType != "GymMember";
              });
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "changeChk",
        value: function changeChk() {
          if (this.chkMbr) this.chkMbr = false;else this.chkMbr = true;
          this.rowData = null;
          if (this.chkMbr) {
            this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrType'], false);
            this.GetAllMembers();
            this.isShown = true;
          } else {
            this.gridColumnApi.setColumnsVisible(['MbrName', 'MbrType'], true);
            this.GetSalaryMst();
            this.isShown = false;
          }
        }
      }]);
      return SalaryMasterComponent;
    }();
    SalaryMasterComponent.ctorParameters = function () {
      return [{
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };
    SalaryMasterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-salary-master',
      template: __importDefault(__webpack_require__( /*! raw-loader!./salary-master.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/salary-master/salary-master.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./salary-master.component.css */"./src/app/salary-master/salary-master.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_gym_service__WEBPACK_IMPORTED_MODULE_5__["GymService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], SalaryMasterComponent);

    /***/
  }),
  /***/"./src/app/send-message/send-message.component.css": (
  /*!*********************************************************!*\
    !*** ./src/app/send-message/send-message.component.css ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSendMessageSendMessageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbmQtbWVzc2FnZS9zZW5kLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  }),
  /***/"./src/app/send-message/send-message.component.ts": (
  /*!********************************************************!*\
    !*** ./src/app/send-message/send-message.component.ts ***!
    \********************************************************/
  /*! exports provided: SendMessageComponent */
  /***/
  function srcAppSendMessageSendMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SendMessageComponent", function () {
      return SendMessageComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! util */"./node_modules/util/util.js");
    /* harmony import */
    var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var SendMessageComponent = /*#__PURE__*/function () {
      function SendMessageComponent(formBuilder, _router, gymServices) {
        _classCallCheck(this, SendMessageComponent);
        this.formBuilder = formBuilder;
        this._router = _router;
        this.gymServices = gymServices;
        //dropdownList = [];
        this.selectedItems = [];
        this.submitted = false;
        this._Members = [];
      }
      _createClass(SendMessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
          this.SendMsgForm = this.formBuilder.group({
            MbrType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MbrMessage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
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
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          debugger;
          this.submitted = true;
          if (!this.SendMsgForm.invalid) {
            this.gymServices.SendPromotionMessage(this.selectedItems).subscribe(function (result) {
              alert('Message Send');
            }, function (error) {
              return alert(error.message);
            });
          }
        }
      }, {
        key: "onItemSelect",
        value: function onItemSelect(item) {
          this.selectedItems.push(item.MbrId);
        }
      }, {
        key: "onSelectAll",
        value: function onSelectAll(items) {
          this.selectedItems.push(items.map(function (x) {
            return x.MbrId;
          }));
        }
      }, {
        key: "GetAllMembers",
        value: function GetAllMembers() {
          var _this46 = this;
          this.gymServices.GetAllMembers().subscribe(function (result) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNull"])(result)) {
              _this46._Members = result.filter(function (x) {
                return x.MbrType == "GymMember";
              });
            }
          }, function (error) {
            return alert(error.message);
          });
        }
      }, {
        key: "fval",
        get: function get() {
          return this.SendMsgForm.controls;
        }
      }]);
      return SendMessageComponent;
    }();
    SendMessageComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }];
    };
    SendMessageComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-send-message',
      template: __importDefault(__webpack_require__( /*! raw-loader!./send-message.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/send-message/send-message.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./send-message.component.css */"./src/app/send-message/send-message.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]])], SendMessageComponent);

    /***/
  }),
  /***/"./src/app/services/gym.service.ts": (
  /*!*****************************************!*\
    !*** ./src/app/services/gym.service.ts ***!
    \*****************************************/
  /*! exports provided: GymService */
  /***/
  function srcAppServicesGymServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GymService", function () {
      return GymService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../..//environments/environment */"./src/environments/environment.ts");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var GymService = /*#__PURE__*/function () {
      function GymService(http) {
        _classCallCheck(this, GymService);
        this.http = http;
      }
      _createClass(GymService, [{
        key: "SendFeedbackEmail",
        value: function SendFeedbackEmail() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/SendFeebackEmail', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "SendPromotionMessage",
        value: function SendPromotionMessage(_membersList) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/SendPromotionMessage?membersLists=' + _membersList + '', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "login",
        value: function login(username, password) {
          var headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
          };
          var userData = "username=" + username + "&password=" + password + "&grant_type=password";
          /*return this.http.post<Token>(baseUrl + 'Token', userData, { 'headers': headers }).pipe(map(data => data));*/
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'Token', userData, {
            'headers': headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "ForgotPassword",
        value: function ForgotPassword(Email) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Common/forgotPassword?Email=' + Email + '', {
            'headers': this.getToken()
          });
        }
      }, {
        key: "Logout",
        value: function Logout() {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Account/Logout', {
            'headers': this.getToken()
          });
        }
      }, {
        key: "UpdatePassowrd",
        value: function UpdatePassowrd(model) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Account/ChangePassword', JSON.stringify(model), {
            'headers': this.getToken()
          });
        }
      }, {
        key: "CheckToken",
        value: function CheckToken() {
          if (localStorage.getItem('token') == null) {
            return false;
          } else return true;
        }
      }, {
        key: "VerifyOTP",
        value: function VerifyOTP(_OTPValue) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Common/VerifyOTP?OTPValue=' + _OTPValue + '', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token') + ''
          };
        }
        /** Error Handling method */
      }, {
        key: "errorHandler",
        value: function errorHandler(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error('Backend returned code ' + error.status + ',' + 'body was: ' + error.error.message + '');
          }
          // return an observable with a user-facing error message
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
        }
        //------------------------ Employee --------------------
      }, {
        key: "GetAllMembers",
        value: function GetAllMembers() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/GetAllMembers', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "GetMemberDetailsById",
        value: function GetMemberDetailsById(_UserId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/GetMemberDetails?UserId=' + _UserId + '', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "AddMembers",
        value: function AddMembers(_Emp) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/CreateMember', JSON.stringify(_Emp), {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "UpdateMember",
        value: function UpdateMember(_Emp) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/UpdateMember', JSON.stringify(_Emp), {
            'headers': this.getToken()
          });
        }
      }, {
        key: "DeleteMember",
        value: function DeleteMember(_EmpId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/DeleteMember?UserId=' + _EmpId + '', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
        //------------------------ End Employee --------------------
      }, {
        key: "GetAllMemberShipPlan",
        value: function GetAllMemberShipPlan() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/GetAllMemberShipPlan', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "AddPlan",
        value: function AddPlan(_Plan) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/CreateMemberShipPlan', JSON.stringify(_Plan), {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "UpdatePlan",
        value: function UpdatePlan(_Plan) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/UpdateMemberShipPlan', JSON.stringify(_Plan), {
            'headers': this.getToken()
          });
        }
      }, {
        key: "DeletePlan",
        value: function DeletePlan(_PlanId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/DeleteMembershipPlan?PlanId=' + _PlanId + '', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "GetPaymentDetails",
        value: function GetPaymentDetails() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/GetGymPaymentDetails', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "GetDashboardData",
        value: function GetDashboardData() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/GetDashboardData', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "GetUpcomingBirthdays",
        value: function GetUpcomingBirthdays() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/GetUpcomingBirthdays', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
        // ------------------------ Expenses Details -----------------
      }, {
        key: "GetAllExpense",
        value: function GetAllExpense() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/GetAllExpense', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "CreateExpense",
        value: function CreateExpense(_Expenses) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/CreateExpense', JSON.stringify(_Expenses), {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "UpdateExpense",
        value: function UpdateExpense(_Expenses) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/UpdateExpense', JSON.stringify(_Expenses), {
            'headers': this.getToken()
          });
        }
      }, {
        key: "DeleteExpense",
        value: function DeleteExpense(_expenseId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/DeleteExpense?expenseId=' + _expenseId + '', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
        //------------------------ Personal Training --------------------
      }, {
        key: "GetAllPTMembers",
        value: function GetAllPTMembers() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/GetAllPtMembers', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "AddPTMembers",
        value: function AddPTMembers(_Emp) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/CreateMemberShipPlanUser', JSON.stringify(_Emp), {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "UpdatePTMembers",
        value: function UpdatePTMembers(_Emp) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/UpdateMemberShipPlanUser', JSON.stringify(_Emp), {
            'headers': this.getToken()
          });
        }
      }, {
        key: "DeletePTMembers",
        value: function DeletePTMembers(_MbrUserId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/DeleteMembershipPlan?MbrUserId=' + _MbrUserId + '', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
        //------------------------ End Employee --------------------
        //------------------------ Gym Profile Details --------------------
      }, {
        key: "GetGymProfileDetails",
        value: function GetGymProfileDetails() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/GetGymProfile', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "UpdateGymProfileDetails",
        value: function UpdateGymProfileDetails(_profile) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymDetails/UpdateGymProfile', JSON.stringify(_profile), {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
        //------------------------ End Gym Profile Details  --------------------
      }, {
        key: "GetMembershipGoingtoExxpiredMembers",
        value: function GetMembershipGoingtoExxpiredMembers() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/GetMembershipGoingtoExxpiredMembers', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "GetAllMemberShipPlanUser",
        value: function GetAllMemberShipPlanUser() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/GetGymMemberRemainingBalance', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "GetGymMemberHistoryById",
        value: function GetGymMemberHistoryById(MemberId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/GetGymMemberHistoryById?MemberId=' + MemberId + '', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "GetInvoiceList",
        value: function GetInvoiceList(MbrId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/GetInvoiceList?MbrId=' + MbrId + '', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "GetInvoice",
        value: function GetInvoice(MbrUserId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/GetInvoice?MbrUserId=' + MbrUserId + '', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "GetMemberYearlyReport",
        value: function GetMemberYearlyReport(_MbrId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymReport/GetMemberYearlyReport?MbrId=' + _MbrId + '', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "GetMembershipReport",
        value: function GetMembershipReport() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymReport/GetMembershipReport', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "GetPTReport",
        value: function GetPTReport() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymReport/GetPTReport', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "GetSummaryReport",
        value: function GetSummaryReport() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/GymReport/GetSummaryReport', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "GetSalaryMstList",
        value: function GetSalaryMstList() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/GetSalaryMstList', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "GetSalaryMstListByMbr",
        value: function GetSalaryMstListByMbr(MbrId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/GetSalaryMstListByMbr?MbrId=' + MbrId + '', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
        }
      }, {
        key: "SaveSalaryMst",
        value: function SaveSalaryMst(_Emp) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/SaveSalaryMst', JSON.stringify(_Emp), {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "UpdateSalaryMst",
        value: function UpdateSalaryMst(_Emp) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/UpdateSalaryMst', JSON.stringify(_Emp), {
            'headers': this.getToken()
          });
        }
      }, {
        key: "DeleteMembersSalaryMst",
        value: function DeleteMembersSalaryMst(_SalId) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + 'api/Member/DeleteMembersSalaryMst?_SalId=' + _SalId + '', {
            'headers': this.getToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
          }));
        }
      }]);
      return GymService;
    }();
    GymService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };
    GymService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], GymService);

    /***/
  }),
  /***/"./src/app/support/support.component.css": (
  /*!***********************************************!*\
    !*** ./src/app/support/support.component.css ***!
    \***********************************************/
  /*! exports provided: default */
  /***/
  function srcAppSupportSupportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/support/support.component.ts": (
  /*!**********************************************!*\
    !*** ./src/app/support/support.component.ts ***!
    \**********************************************/
  /*! exports provided: SupportComponent */
  /***/
  function srcAppSupportSupportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SupportComponent", function () {
      return SupportComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _services_gym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/gym.service */"./src/app/services/gym.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var SupportComponent = /*#__PURE__*/function () {
      function SupportComponent(formBuilder, _router, gymServices) {
        _classCallCheck(this, SupportComponent);
        this.formBuilder = formBuilder;
        this._router = _router;
        this.gymServices = gymServices;
        this.submitted = false;
      }
      _createClass(SupportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsSessionEnable = this.gymServices.CheckToken();
          if (!this.IsSessionEnable) return this._router.navigate([""]);
          this.AppSuportForm = this.formBuilder.group({
            SupportName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            SupportContact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            SupportSubject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            SupportBody: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          debugger;
          this.submitted = true;
          if (!this.AppSuportForm.invalid) {
            this.gymServices.SendFeedbackEmail().subscribe(function (result) {
              alert('Feedback Send');
            }, function (error) {
              return alert(error.message);
            });
          }
        }
      }, {
        key: "fval",
        get: function get() {
          return this.AppSuportForm.controls;
        }
      }]);
      return SupportComponent;
    }();
    SupportComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]
      }];
    };
    SupportComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-support',
      template: __importDefault(__webpack_require__( /*! raw-loader!./support.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./support.component.css */"./src/app/support/support.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_gym_service__WEBPACK_IMPORTED_MODULE_2__["GymService"]])], SupportComponent);

    /***/
  }),
  /***/"./src/app/trainers-history/trainers-history.component.css": (
  /*!*****************************************************************!*\
    !*** ./src/app/trainers-history/trainers-history.component.css ***!
    \*****************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppTrainersHistoryTrainersHistoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWluZXJzLWhpc3RvcnkvdHJhaW5lcnMtaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */";

    /***/
  }),
  /***/"./src/app/trainers-history/trainers-history.component.ts": (
  /*!****************************************************************!*\
    !*** ./src/app/trainers-history/trainers-history.component.ts ***!
    \****************************************************************/
  /*! exports provided: TrainersHistoryComponent */
  /***/
  function srcAppTrainersHistoryTrainersHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TrainersHistoryComponent", function () {
      return TrainersHistoryComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    var TrainersHistoryComponent = /*#__PURE__*/function () {
      function TrainersHistoryComponent() {
        _classCallCheck(this, TrainersHistoryComponent);
      }
      _createClass(TrainersHistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return TrainersHistoryComponent;
    }();
    TrainersHistoryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-trainers-history',
      template: __importDefault(__webpack_require__( /*! raw-loader!./trainers-history.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/trainers-history/trainers-history.component.html"))["default"],
      styles: [__importDefault(__webpack_require__( /*! ./trainers-history.component.css */"./src/app/trainers-history/trainers-history.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], TrainersHistoryComponent);

    /***/
  }),
  /***/"./src/environments/environment.ts": (
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment, baseUrl */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "baseUrl", function () {
      return baseUrl;
    });
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.
    var environment = {
      production: false
    };
    //export const baseUrl = "https://localhost:44314/";
    //export const sgMailAPIKey = "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";
    var baseUrl = "http://192.168.0.159:81/";
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  }),
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! exports provided: getBaseUrl */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }
    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! F:\Chetan Work data\Work\Vs Prj\GYM Management\GymManagment\GymManagment\ClientApp\src\main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map