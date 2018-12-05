
import Filtreur from '../components/Filtreur';
import { toggleFilterAction } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { filterOn : state.filter };
};

const mapDispatchToProps = dispatch => {
    return {
        onHandleFilterToggle: () => {
            dispatch(toggleFilterAction());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filtreur);
