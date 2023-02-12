import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, toggleForm, showForm}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            text={showForm ? 'Close' : 'Add'}
            onClick={toggleForm}
            color={showForm ? 'indianred' : 'steelblue'}
            />
        </header>
    )
}

// default props if the component doesnt receive its own props
Header.defaultProps = {
    title: 'Task Manager',
}

//used to control prop types (string, int etc)
// and require certain props
// you get warning if a different prop type was passed
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headerStyling = {
//     color: 'skyblue',
//     fontSize: '2rem',
// }

export default Header
