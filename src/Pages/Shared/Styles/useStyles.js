import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    colorRed: { color: '#E40046' },
    title: { fontSize: '50px', },
    bgOfWhite: { backgroundColor: '#f6f6f6' },
    jobTitle: { fontSize: '18px', color: '#E40046', lineHeight: '18px' },
    '@media (max-width: 768px)': {
        title: { fontSize: '28px' },
    },
})

export default useStyles;