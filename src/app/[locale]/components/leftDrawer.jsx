'use client'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function MobileDrawer() {
	const [isOpen, setIsOpen] = useState(false)

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/vehicles', label: 'Vehicles' },
		{ href: '/about', label: 'About Us' },
		{ href: '/contact', label: 'Contact Us' },
	]

	const toggleDrawer = open => () => {
		setIsOpen(open)
	}

	const list = (
		<Box
			sx={{ width: 250 }}
			role='presentation'
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				{links.map(link => (
					<ListItem key={link.href} disablePadding>
						<ListItemButton component={Link} href={link.href}>
							<ListItemText primary={link.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	return (
		<div className='xl:hidden'>
			<button variant='outlined' onClick={toggleDrawer(true)}>
				<Menu />
			</button>
			<Drawer anchor='left' open={isOpen} onClose={toggleDrawer(false)}>
				{list}
			</Drawer>
		</div>
	)
}
