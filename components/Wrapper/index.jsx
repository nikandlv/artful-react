import 'normalize.sass/_normalize.sass'
import 'flexboxgrid-sass/flexboxgrid.scss'
import '../../resources/App.sass'
export default function Wrapper(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}