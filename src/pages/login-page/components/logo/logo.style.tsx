import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logoContainer: {
      fontSize: '30px',
      paddingBottom: '35px',
      position: 'relative' as 'relative'
    },
    logo: {},
    errorContainer: {
      position: 'absolute' as 'absolute',
      width: '100%',
      height: '35px',
      backgroundColor: 'red',
      padding: '5px',
      fontSize: '15px',
      display: 'flex',
      alignItems: 'center',
      left: '0'
    }
  })
);
