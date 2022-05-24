
import  ReactDOM  from 'react-dom';

import classes from './notification.module.css';

function Notification({ title, message, status, setNoti }) {

  // console.log(status)
  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }


  function closer() {
    setNoti({ active: false, title: '', message: '', status: '' })
  }


  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal((
    <div className={cssClasses} onClick={closer}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ), document.getElementById("notifications"))
}

export default Notification;
