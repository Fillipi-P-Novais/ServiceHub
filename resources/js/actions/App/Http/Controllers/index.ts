import Settings from './Settings'
import TicketController from './TicketController'

const Controllers = {
    Settings: Object.assign(Settings, Settings),
    TicketController: Object.assign(TicketController, TicketController),
}

export default Controllers