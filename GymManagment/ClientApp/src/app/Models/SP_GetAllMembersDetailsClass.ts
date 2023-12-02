import { MbrShipPlanUserClass } from "./MbrShipPlanUserClass";
import { salaryMasterClass } from "./salaryMasterClass";

export class SP_GetAllMembersDetailsClass {

    public MbrId: string;
    public MbrName: string;
    public MbrType: string;
    public MbrMob: string;
    public MbrDOB: string;
    public MbrMarrialStatus: string;
    public MbrDOJ: string;
    public MbrDOL: string;
    public MbrEmail: string;
    public MbrAddr: string;
    public MbrShipName: string;
    public MbrShipDurationInDays: string;
    public MbrShipAmt: string;
    public PaidAmt: string;
    public PaidBy: string;
    public PaidDt: string;
    public MbrshipStartDt: string;
    public MbrshipEndDt: string;

    public _salaryMasterClass: salaryMasterClass;

    public _MbrShipPlanUserClass: MbrShipPlanUserClass;

}
 