import { IActivityProps, IBlogProps } from '../types/imageTypes'
import ActivityImage1 from '../public/assets/logo_ths.jpg'
import ActivityImage2 from '../public/assets/logo_ths.jpg'
import BlogImage1 from '../public/assets/logo_ths.jpg'
import BlogImage2 from '../public/assets/logo_ths.jpg'
import BlogImage3 from '../public/assets/logo_ths.jpg'

export const activities: IActivityProps[] =  [
    { 
        "id": 1,
        "img": ActivityImage1,
        "alt": "Games and entertainment",
        "heading": "Games & Entertainment",
        "summary": "Sports impact our culture,other sources of entertainment and our economy.They help in physical and mental growth and also contribute to the formation of character generally."
    }, {
        "id": 2,
        "img": ActivityImage2,
        "alt": "Art and creativity",
        "heading": "Art & Creativity",
        "summary": "Art is the expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."
    } 
]

export const blogsPreview: IBlogProps[] = [
    {
        id: 1,
        img: BlogImage1,
        alt: "Graduating pupils",
        summary: "Graduating set gives farewell speech,says how happy they are to be moving to the next level..."
    }, {
        id: 2,
        img: BlogImage2,
        alt: "Visits",
        summary: "Nestle Milo visit to the school.See what Nestle Nigeria had to discuss with the students amidst other entertainment..."
    }, {
        id: 3,
        img: BlogImage3,
        alt: "Parent Teacher Association",
        summary: "Parents suggest ways to enhance optimum development and improved facilities at PTA meeting..."
    }
]

export const navItems: NavProps[] = [
    {
        label: "Home",
        href: "/" 
    }, {
        label: "About Us",
        children: [
            {
                label: "About Us",
                href: "/about_us"
            }, {
                label: "Our Blog",
                href: "/about_us/blog"
            }
        ] 
    }, {
        label: "Gallery",
        href: "/gallery"
    }, {
        label: "Join Us",
        href: "/join_us",
        children: [
            {
                label: "Admissions",
                href: "/join_us/admissions"
            }, {
                label: "Vacancies",
                href: "/join_us/vacancies"
            }
        ] 
    }, {
        label: "Contact Us",
        href: "/contact_us"
    }
]

// import path from 'path'
// import { promises as fs } from 'fs'

// export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) {
//   //Find the absolute path of the json directory
//   const jsonDirectory = path.join(process.cwd(), 'json')
//   //Read the json data file data.json
//   const fileContents = await fs.readFile(jsonDirectory + '/activities.json', 'utf8')
//   //Return the content of the data file in json format
//   res.status(200).json(fileContents)
// }
