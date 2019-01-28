import styled from 'styled-components'
import {styles} from '../utils'

const BannerButton = styled.button`
    display: block;
    color:${styles.colors.mainWhite};
    background: transparent;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: 0.5rem;
    font-weight: 700;
    ${styles.border({color: `${styles.colors.mainWhite}`})};
    ${styles.transition({})};
    &:hover{
        background: ${styles.colors.mainWhite};
        color: ${styles.colors.mainBlack};
        cursor: pointer;
    }


`

export {BannerButton}
