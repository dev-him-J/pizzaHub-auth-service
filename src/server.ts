import Config from './config'

function welcome(name: string) {
    const user = {
        name: 'Himanshu',
    }
    console.log(Config.port)
    const u1 = user.name
    return name + u1
}
welcome('Himanshu')
