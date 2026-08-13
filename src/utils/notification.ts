import { toast } from 'react-toastify';

class Notification {
  constructor(message: string) {
    toast(message);
  }
}

export default Notification;
