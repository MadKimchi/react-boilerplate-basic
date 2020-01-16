import React, {
  useLayoutEffect,
  useContext,
  FunctionComponent,
  Component,
  ReactElement
} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { ModalService } from '../../core/services/modal.service';
import { ServiceContext } from '../../core/contexts/service.context';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      // backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  })
);

export const ModalDialog: FunctionComponent = (): ReactElement => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [component, setComponent] = React.useState({});

  // exceptional here with type any.
  const modalService: ModalService<any> = useContext(ServiceContext)
    .modalService;
  console.log(component);
  useLayoutEffect(() => {
    const onInjectComponent = modalService.onInjection.subscribe(
      (component: Component | FunctionComponent) => {
        setComponent(component);
        setOpen(true);
      }
    );
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setComponent({});
  };

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
    >
      <div style={modalStyle} className={classes.paper}>
        {component}
      </div>
    </Modal>
  );
};
