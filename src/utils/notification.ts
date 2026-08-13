import { toast } from 'react-toastify';

class Notification {
  constructor(message: string) {
    toast(message, {
      style: {
        fontFamily: 'Inter, Inter Fallback',
      },
    });
  }
}

export default Notification;
