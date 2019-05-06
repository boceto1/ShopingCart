import { connect } from 'react-redux'

// import { addTodo } from '../actions/todos'
import Cart, { StoreProps, DispatchProps } from '../components/Cart'

export default connect<StoreProps, DispatchProps, {}>(null, {

})(Cart)