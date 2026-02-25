export const getPosts = async (req, res) => {
  try {
    // Later, you will replace this array with: await prisma.post.findMany()
    // But for now, your API will return this realistic Indian data!
    const indianProperties = [
      {
        id: "1",
        title: "Sea-Facing Apartment in Bandra",
        images: ["https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        bedroom: 3,
        bathroom: 2,
        price: 85000, // ₹85,000/month rent
        address: "Carter Road, Bandra West, Mumbai",
        latitude: 19.0664,
        longitude: 72.8250,
      },
      {
        id: "2",
        title: "Modern Tech-Park Flat",
        images: ["https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        bedroom: 2,
        bathroom: 2,
        price: 40000,
        address: "Electronic City Phase 1, Bangalore",
        latitude: 12.8399,
        longitude: 77.6770,
      },
      {
        id: "3",
        title: "Luxury Villa near Cyber City",
        images: ["https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
        bedroom: 4,
        bathroom: 4,
        price: 120000,
        address: "DLF Phase 3, Gurugram",
        latitude: 28.4905,
        longitude: 77.0906,
      },
    ];

    res.status(200).json(indianProperties);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch posts" });
  }
};