// camelCase
// PascalCase

// ChildComponent is receiving a prop of 'count'
// this property is going to be found in the only argument it receives

// the inline style property of a tag in JSX is always an OBJECT
// {
//      color: 'red',
//      backgroundColor: 'blu'
// }

const ChildComponent = (props) => (
    <div>
        <h1 style={{ color: props.color }}>{props.title}</h1>
        <h3>This is a funny afternoon!</h3>
        <p>The value of count is: {props.count} and the color chosen is {props.color}</p>
    </div>
)

export default ChildComponent