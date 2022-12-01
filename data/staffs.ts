import { IStaffProps } from "../types/imageTypes"
import mrsBalogun from "../assets/teachers/POP_21561.jpg"
import mrsBose from "../assets/teachers/Mrs_Bose3.jpg"
import missTaiwo from "../assets/teachers/Miss_Taiwo_2.jpg"
import missKehinde from "../assets/teachers/Miss_Kehinde_2.jpg"
import missYinka from "../assets/teachers/Miss_Yinka_2.jpg"
import missTaiye from "../assets/teachers/Miss_Taiye_Balogun.jpg"
import avatar from "../assets/teachers/avatar-temp.png"

export const staffs: IStaffProps[] = [
	{
		sName: "Mrs Balogun",
		role: "Headmistress/ Proprietress",
		img: mrsBalogun,
		whatsapp: "https://wa.link/a1tplz",
	},
	{
		sName: "Mr Ahmeed",
		role: "Teacher",
		img: avatar,
		whatsapp: "https://wa.link/lx3ww9",
		email: "mailto:ettibal04@gmail.com",
	},
	{
		sName: "Mrs Bose",
		role: "Teacher",
		img: mrsBose,
		whatsapp: "#",
	},
	{
		sName: "Miss Taiwo",
		role: "Teacher",
		img: missTaiwo,
		whatsapp: "https://wa.link/lx3ww9",
		email: "mailto:opeyemit156@gmail.com",
	},
	{
		sName: "Miss Kehinde",
		role: "Teacher",
		img: missKehinde,
		whatsapp: "https://wa.link/1k4ynv",
		email: "mailto:bunmikehinde766@gmail.com",
	},
	{
		sName: "Miss Yinka",
		role: "Teacher",
		img: missYinka,
		whatsapp: "https://wa.link/p05sq2",
		email: "mailto:famulegun123@gmail.com",
	},
]
