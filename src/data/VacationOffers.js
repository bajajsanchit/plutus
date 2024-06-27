const marriottProperties = [
	// {
	// 	title: "Courtyard by Marriott Ahmedabad",
	// 	pointsNeeded: 15000,
	// 	description: "Comfortable and modern stay in Ahmedabad's business hub.",
	// 	image:
	// 		"https://cf.bstatic.com/xdata/images/hotel/max1024x768/461651190.jpg?k=8673bb4822f3ac0fc9a9b1a9fc3d830a4d2132cfd5e5a1375234917bcc5e843a&o=&hp=1",
	// },
	{
		title: "The Westin Hyderabad Mindspace",
		pointsNeeded: 25000,
		description: "Luxury hotel in Hyderabad's IT hub.",
		image:
			"https://cf.bstatic.com/xdata/images/hotel/max1024x768/433716392.jpg?k=03757ae51e82d38c5f3f4a827206f7a2d878e8b61fb936c5c426101d13c5868d&o=&hp=1",
	},
	{
		title: "Renaissance Mumbai Convention Centre Hotel",
		pointsNeeded: 25000,
		description: "Luxury hotel with views of Powai Lake.",
		image:
			"https://cf.bstatic.com/xdata/images/hotel/max1024x768/469618667.jpg?k=3e12239de829b7747f6372538cd1987338f406e0b759b471f61dfc882e416e4c&o=&hp=1",
	},
	{
		title: "Le Méridien Kochi",
		pointsNeeded: 25000,
		description: "Upscale hotel amidst Kochi's scenic backwaters.",
		image:
			"https://cf.bstatic.com/xdata/images/hotel/max1024x768/463615042.jpg?k=f433354d2a4de0529c59fa0e9f86a49a6134bdc07f4ab361abcaae6e7e53aa79&o=&hp=1",
	},
	// {
	// 	title: "Le Méridien Mahabaleshwar Resort & Spa",
	// 	pointsNeeded: 30000,
	// 	description: "Luxury resort in the hills of Mahabaleshwar.",
	// 	image:
	// 		"https://cf.bstatic.com/xdata/images/hotel/max1024x768/469203458.jpg?k=beab3446cba921014e997b179045c4108769541d957d953b2478949fa1ceab6d&o=&hp=1",
	// },
	{
		title: "Goa Marriott Resort & Spa",
		pointsNeeded: 35000,
		description: "Beachfront resort offering luxury in Goa.",
		image:
			"https://cf.bstatic.com/xdata/images/hotel/max1024x768/439507592.jpg?k=7aa32b8111cb8af6adea3ac3fe1683dc068034bcfad609d820c8a9d2f76be581&o=&hp=1",
	},
	{
		title: "JW Marriott Mumbai Sahar",
		pointsNeeded: 35000,
		description: "Luxury hotel near Mumbai's international airport.",
		image:
			"https://cf.bstatic.com/xdata/images/hotel/max1024x768/465549681.jpg?k=8c903ab7bf0fd906a3fe7b456463805c4026db2dab6706341a83d385160f0f9b&o=&hp=1",
	},
	{
		title: "Four Points by Sheraton Jaipur",
		pointsNeeded: 15000,
		description: "Comfortable and affordable stay in Jaipur.",
		image:
			"https://cf.bstatic.com/xdata/images/hotel/max1024x768/469186253.jpg?k=2e7d7e3cef641e349076325ca89e4c9466631cb29b2c2d49c8e7c3b3a8e53da8&o=&hp=1",
	},
	// {
	// 	title: "Aloft Bengaluru Cessna Business Park",
	// 	pointsNeeded: 15000,
	// 	description: "Trendy hotel in Bengaluru's tech park area.",
	// 	image:
	// 		"https://cf.bstatic.com/xdata/images/hotel/max1024x768/517376287.jpg?k=07fd6f0c70d5e1ee1fe486c458ffd87a31b2ae9d31f0c9db7e923d05bcb26c99&o=&hp=1",
	// },
	{
		title: "JW Marriott Hotel Pune",
		pointsNeeded: 35000,
		description: "Upscale hotel in Pune's business district.",
		image:
			"https://cf.bstatic.com/xdata/images/hotel/max1024x768/461609206.jpg?k=fc677d106c07e2a3e2c4e619f8857fe9266fd51fec3ede6ea580303240d8c375&o=&hp=1",
	},
	{
		title: "JW Marriott Hotel New Delhi Aerocity",
		pointsNeeded: 35000,
		description: "Luxury hotel in New Delhi's Aerocity.",
		image:
			"https://cf.bstatic.com/xdata/images/hotel/max1024x768/451103750.jpg?k=a5dffac76819bb5e1bd94c6e481c3fb54fed04ca0b83c63d43524a149e963de2&o=&hp=1",
	},
	// {
	// 	title: "Fairfield by Marriott Kolkata",
	// 	pointsNeeded: 15000,
	// 	description: "Convenient and budget-friendly stay in Kolkata.",
	// 	image:
	// 		"https://cf.bstatic.com/xdata/images/hotel/max1024x768/459766077.jpg?k=f5ab44e69e56f475fce64c138c0a7b589c58679620a217c905bd825f71ae3598&o=&hp=1",
	// },
	{
		title: "Sheraton Grand Chennai Resort & Spa",
		pointsNeeded: 25000,
		description: "Beachfront resort offering luxury in Chennai.",
		image:
			"https://cf.bstatic.com/xdata/images/hotel/max1024x768/465562919.jpg?k=a2d5488bb77fc0569208b7a1654ed9a4e65e91b8a7735bea87cfdb60b56fc3bb&o=&hp=1",
	},
	{
		title: "Courtyard by Marriott Agra",
		pointsNeeded: 15000,
		description: "Modern hotel near the iconic Taj Mahal.",
		image:
			"https://cf.bstatic.com/xdata/images/hotel/max1024x768/496824753.jpg?k=a46e04d0cfcf88186ae80485d7ced1fe19188bdfc9d65557518a4938f0ac437e&o=&hp=1",
	},
	{
		title: "Renaissance Bengaluru Race Course Hotel",
		pointsNeeded: 20000,
		description: "Stylish hotel overlooking Bengaluru Race Course.",
		image:
			"https://cf.bstatic.com/xdata/images/hotel/max1024x768/513923904.jpg?k=fdb1af3110969f11d80b2e75ffb4f65eb7d8db00fc2677f3a7131cdbd9c6122b&o=&hp=1",
	},
	{
		title: "Courtyard by Marriott Bhopal",
		pointsNeeded: 20000,
		description: "Conveniently located in Bhopal's business district.",
		image:
			"https://cf.bstatic.com/xdata/images/hotel/max1024x768/463686136.jpg?k=964c18d9d8cf7937633b5854e8e5d9791f8d45ca3345097d21c2d39ac3647ae8&o=&hp=1",
	},
];

export default marriottProperties;
