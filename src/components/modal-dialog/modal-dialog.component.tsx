import React, {
  useContext,
  FunctionComponent,
  Component,
  ReactElement,
  useEffect
} from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import { ModalService } from '../../core/services/modal.service';
import { ServiceContext } from '../../core/contexts/service.context';

function getModalStyle() {
  const top = 50;
  const left = 50;

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
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  })
);

export const ModalDialog: FunctionComponent = (): ReactElement => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [component, setComponent] = React.useState({});

  // exceptional here with type any.
  const modalService: ModalService<any> = useContext(ServiceContext)
    .modalService;

  useEffect(
    () => {
      const onInjectComponent = modalService.onInjection.subscribe(
        (component: Component | FunctionComponent) => {
          setComponent(component);
          setOpen(true);
        }
      );

      return () => {
        onInjectComponent.unsubscribe();
      };
    },
    [modalService.onInjection]
  );

  const handleClose = () => {
    setOpen(false);
    setComponent({});
    modalService.isModalOpen = false;
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
