let input = prompt('what would you like to do?');
let Todo = ['Clean up the mess', 'Get some appliances'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**************');
        for (let i = 0; i < Todo.length; i++) {
            console.log(`${i}: ${Todo[i]}`);
        }
        console.log('**************');
    }
    else if (input === 'new') {
        const New = prompt('What would you like to add?')
        Todo.push(New);
        console.log(`${New} added to the list`);
    }
    else if (input === 'delete') {
        const Delete = prompt('Choose the serial no. of an item to delete:');
        Todo.splice(Delete, 1);
        console.log(`Item with serial no. ${Delete} was deleted!`);
    }
    input = prompt('What would you like to do?')
}
console.log('Ok, you quit the app!');


