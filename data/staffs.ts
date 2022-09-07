import { IStaffProps, IStaffsArray } from '../types/imageTypes'
import mrsBalogun from '../public/assets/logo_ths.jpg'
import mrsBose from '../public/assets/logo_ths.jpg'
import missTaiwo from '../public/assets/logo_ths.jpg'
import missKehinde from '../public/assets/logo_ths.jpg'
import missYinka from '../public/assets/logo_ths.jpg'
import Staffs from '../public/assets/logo_ths.jpg'

export const staffs:IStaffProps [] = [
    {
        name: 'Mrs Balogun',
        role: 'Headmistress/ Proprietress',
        img: mrsBalogun
    }, {
        name: 'Mrs Bose',
        role: 'Teacher',
        img: mrsBose
    }, {
        name: 'Miss Taiwo',
        role: 'Teacher',
        img: missTaiwo
    }, {
        name: 'Miss Kehinde',
        role: 'Teacher',
        img: missKehinde
    }, {
        name: 'Miss Yinka',
        role: 'Teacher',
        img: missYinka
    }, {
        name: 'Others',
        role: 'Teacher',
        img: Staffs
    }
]

export const staffsArray: IStaffsArray[] = [
    {
        child: [
            {
                name: 'Mrs Balogun',
                role: 'Headmistress/ Proprietress',
                img: mrsBalogun
            }, {
                name: 'Mrs Bose',
                role: 'Teacher',
                img: mrsBose
            }, {
                name: 'Miss Taiwo',
                role: 'Teacher',
                img: missTaiwo
            }
        ]
    }, {
        child: [
            {
                name: 'Miss Kehinde',
                role: 'Teacher',
                img: missKehinde
            }, {
                name: 'Miss Yinka',
                role: 'Teacher',
                img: missYinka
            }, {
                name: 'Others',
                role: 'Teacher',
                img: Staffs
            }
        ]
    }
]