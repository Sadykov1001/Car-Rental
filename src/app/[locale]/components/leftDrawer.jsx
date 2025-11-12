'use client'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function MobileDrawer() {
	const [isOpen, setIsOpen] = useState(false)

	const links = [
		{ href: '/', label: '🏠 Home' },
		{ href: '/vehicles', label: '🚗 Vehicles' },
		{ href: '/about', label: 'ℹ️ About Us' },
		{ href: '/contact', label: '📞 Contact Us' },
	]

	const toggleDrawer = open => () => setIsOpen(open)

	const list = (
		<Box
			sx={{
				width: 260,
				height: '100%',
				background: 'linear-gradient(180deg, #5937E0 0%, #3A1AB3 100%)',
				color: '#fff',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
			role='presentation'
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<div>
				<div className='flex items-center justify-between px-5 py-4 border-b border-white/20'>
					<h2 className='text-lg font-semibold tracking-wide'>Rent a Car</h2>
					<button
						onClick={toggleDrawer(false)}
						className='text-white/80 hover:text-white'
					>
						<X size={24} />
					</button>
				</div>

				<List sx={{ mt: 2 }}>
					{links.map(link => (
						<ListItem key={link.href} disablePadding>
							<ListItemButton
								component={Link}
								href={link.href}
								sx={{
									color: '#fff',
									py: 1.5,
									px: 3,
									transition: 'all 0.3s ease',
									'&:hover': {
										backgroundColor: 'rgba(255,255,255,0.15)',
										transform: 'translateX(6px)',
									},
								}}
							>
								<ListItemText
									primary={link.label}
									primaryTypographyProps={{
										fontSize: '1rem',
										fontWeight: 500,
										letterSpacing: '0.5px',
									}}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</div>

			<div className='text-center py-4 text-xs text-white/60 border-t border-white/10'>
				© 2025 <span className='font-semibold text-white'>MyCompany</span>
			</div>
		</Box>
	)

	return (
		<div className='xl:hidden'>
			<button
				onClick={toggleDrawer(true)}
				className='p-2 text-gray-700 hover:text-black transition'
			>
				<Menu size={28} />
			</button>
			<Drawer
				anchor='left'
				open={isOpen}
				onClose={toggleDrawer(false)}
				PaperProps={{
					sx: {
						backgroundColor: 'transparent',
						boxShadow: 'none',
					},
				}}
			>
				{list}
			</Drawer>
		</div>
	)
}
