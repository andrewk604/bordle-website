/*eslint-disable*/
import { eventDispatch } from "../hooks/useEventListener";

export enum EAlertTypes {
  Success = "SUCCESS",
  Error = "ERROR"
}

const AlertsService = {
  showAlert: (type: EAlertTypes, message: string) => {
    eventDispatch(`SHOW_ALERT`, { type, message });
  },
  showSuccess: (message: string) => {
    AlertsService.showAlert(EAlertTypes.Success, message);
  },
  showError: (message: string) => {
    AlertsService.showAlert(EAlertTypes.Error, message);
  }
};

export default AlertsService;
/*eslint-enable*/
