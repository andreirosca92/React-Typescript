type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

// name: string per "andrei"
export const Greet = (props:GreetProps) =>{
  const {messageCount = 0} = props;

    return (
      <div>
        <h2>
          {props.isLoggedIn
            ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`
            : 'Welcome Guest'}
        </h2>
      </div>
    );
}