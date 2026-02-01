import Settings from './Settings'
import CompanyController from './CompanyController'
import ProjectController from './ProjectController'
import TicketController from './TicketController'
import NotificationController from './NotificationController'
const Controllers = {
    Settings: Object.assign(Settings, Settings),
CompanyController: Object.assign(CompanyController, CompanyController),
ProjectController: Object.assign(ProjectController, ProjectController),
TicketController: Object.assign(TicketController, TicketController),
NotificationController: Object.assign(NotificationController, NotificationController),
}

export default Controllers