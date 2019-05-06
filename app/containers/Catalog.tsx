import { connect } from 'react-redux'

// import { addTodo } from '../actions/todos'
import Catalog, { StoreProps, DispatchProps } from '../components/Catalog'

export default connect<StoreProps, DispatchProps, {}>(null, {
    
})(Catalog)