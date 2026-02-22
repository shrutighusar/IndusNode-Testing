export const products = [
    {
        id: 'p1',
        name: 'Indus Horizon X1',
        brand: 'NovaTech',
        category: 'Smartphones',
        price: 84999,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800',
        specs: {
            display: '6.7" OLED 144Hz',
            processor: 'Quantum-8 Gen 3',
            ram: '12GB',
            storage: '256GB',
            camera: '108MP Main'
        },
        rating: 4.8,
        reviews: 1240,
        tags: ['flagship', 'gaming', 'high-camera', 'premium']
    },
    {
        id: 'p2',
        name: 'Nebula Pro Max',
        brand: 'NovaTech',
        category: 'Smartphones',
        price: 114999,
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800',
        specs: {
            display: '6.9" Super AMOLED',
            processor: 'Quantum-8 Gen 3',
            ram: '16GB',
            storage: '512GB',
            camera: '200MP Main'
        },
        rating: 4.9,
        reviews: 856,
        tags: ['flagship', 'productivity', 'pro-camera', 'premium']
    },
    {
        id: 'p3',
        name: 'Aether Pods Gen 2',
        brand: 'Acoustix',
        category: 'Headphones',
        price: 19999,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
        specs: {
            battery: '40 Hours',
            anc: 'Active Hybrid',
            connection: 'Bluetooth 5.3',
            drivers: '40mm Beryllium'
        },
        rating: 4.7,
        reviews: 2150,
        tags: ['wireless', 'anc', 'audio', 'portable']
    },
    {
        id: 'p4',
        name: 'Zenith Book 14',
        brand: 'Apex',
        category: 'Laptops',
        price: 124999,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
        specs: {
            display: '14" 3K ProDisplay',
            processor: 'M3-equivalent Ryzen 9',
            ram: '32GB',
            storage: '1TB SSD',
            gpu: 'RTX 4060 Mobile'
        },
        rating: 4.6,
        reviews: 432,
        tags: ['pro', 'lightweight', 'creative', 'high-perf']
    },
    {
        id: 'p5',
        name: 'Titan Gaming Desktop',
        brand: 'Apex',
        category: 'Laptops',
        price: 214999,
        image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=800',
        specs: {
            display: 'N/A (Tower)',
            processor: 'i9-14900K',
            ram: '64GB DDR5',
            storage: '2TB NVMe',
            gpu: 'RTX 4090'
        },
        rating: 5.0,
        reviews: 120,
        tags: ['gaming', 'extreme', 'high-perf', 'pro']
    },
    {
        id: 'p6',
        name: 'Pulse Watch S3',
        brand: 'BioSync',
        category: 'Smartwatches',
        price: 29999,
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800',
        specs: {
            display: '1.5" AMOLED',
            battery: '10 Days',
            health: 'ECG, SpO2, HRV',
            gps: 'Dual Band'
        },
        rating: 4.5,
        reviews: 3400,
        tags: ['fitness', 'smart', 'wearable', 'health']
    },
    {
        id: 'p7',
        name: 'Flow Tablet 11',
        brand: 'NovaTech',
        category: 'Tablets',
        price: 49999,
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
        specs: {
            display: '11" 120Hz Liquid XR',
            processor: 'A15 equivalent',
            ram: '8GB',
            storage: '128GB',
            stylus: 'Included'
        },
        rating: 4.4,
        reviews: 670,
        tags: ['creative', 'education', 'portable', 'tablet']
    },
    {
        id: 'p8',
        name: 'Capture X5 Mirrorless',
        brand: 'OpticFocus',
        category: 'Cameras',
        price: 154999,
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
        specs: {
            sensor: '45MP Full Frame',
            video: '8K 30fps',
            focus: 'AI Track Eye',
            mount: 'E-Mount'
        },
        rating: 4.8,
        reviews: 290,
        tags: ['photo', 'video', 'professional', 'optics']
    },
    {
        id: 'p9',
        name: 'Rift VR Headset',
        brand: 'Portal',
        category: 'Gaming Consoles',
        price: 44999,
        image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800',
        specs: {
            display: 'Dual 4K Micro-OLED',
            refresh: '120Hz',
            tracking: 'Inside-out',
            fov: '110 degrees'
        },
        rating: 4.3,
        reviews: 1100,
        tags: ['gaming', 'vr', 'immersive', 'tech']
    },
    {
        id: 'p10',
        name: 'SoundBar Ultra 7.1',
        brand: 'Acoustix',
        category: 'Accessories',
        price: 74999,
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800',
        specs: {
            channels: '7.1.4 Dolby Atmos',
            power: '600W',
            connectivity: 'HDMI eARC',
            subwoofer: 'Wireless 10"'
        },
        rating: 4.6,
        reviews: 450,
        tags: ['audio', 'home-theater', 'premium']
    },
    {
        id: 'p11',
        name: 'Sonic Buds Mini',
        brand: 'Acoustix',
        category: 'Headphones',
        price: 8999,
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800',
        specs: {
            battery: '24 Hours',
            fit: 'In-ear',
            waterproof: 'IPX4'
        },
        rating: 4.2,
        reviews: 5600,
        tags: ['wireless', 'budget', 'portable']
    },
    {
        id: 'p12',
        name: 'Vertex Mouse V2',
        brand: 'Apex',
        category: 'Accessories',
        price: 11999,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800',
        specs: {
            sensor: '30K DPI Optical',
            weight: '55g',
            switches: 'Optical Gen 3'
        },
        rating: 4.9,
        reviews: 1200,
        tags: ['gaming', 'high-perf', 'productivity']
    },
    {
        id: 'p13',
        name: 'Horizon Phone Lite',
        brand: 'NovaTech',
        category: 'Smartphones',
        price: 34999,
        image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=800',
        specs: {
            display: '6.1" LCD 90Hz',
            ram: '6GB',
            storage: '128GB'
        },
        rating: 4.0,
        reviews: 890,
        tags: ['budget', 'portable', 'smartphones']
    },
    {
        id: 'p14',
        name: 'Cinema 4K Projector',
        brand: 'OpticFocus',
        category: 'Accessories',
        price: 184999,
        image: '/assets/cinema_projector.png',
        specs: {
            resolution: 'Native 4K',
            brightness: '3000 Lumens',
            source: 'Laser'
        },
        rating: 4.7,
        reviews: 180,
        tags: ['video', 'home-theater', 'pro']
    },
    {
        id: 'p15',
        name: 'PlaySphere Console',
        brand: 'Portal',
        category: 'Gaming Consoles',
        price: 49999,
        image: '/assets/playsphere_console.png',
        specs: {
            gpu: '12 TFLOPS',
            storage: '1TB Custom SSD',
            controller: 'Adaptive Haptics'
        },
        rating: 4.8,
        reviews: 8900,
        tags: ['gaming', 'entertainment', 'popular']
    },
    {
        id: 'p16',
        name: 'Orbit Pad Pro',
        brand: 'Apex',
        category: 'Accessories',
        price: 3999,
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=800',
        specs: {
            material: 'Micro-woven Cloth',
            size: '900x400mm',
            rgb: 'Edge Lighting'
        },
        rating: 4.6,
        reviews: 340,
        tags: ['gaming', 'setup']
    },
    {
        id: 'p17',
        name: 'Neo Mirrorless Z1',
        brand: 'OpticFocus',
        category: 'Cameras',
        price: 84999,
        image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80&w=800',
        specs: {
            sensor: '24MP APS-C',
            video: '4K 60fps',
            weight: '450g'
        },
        rating: 4.5,
        reviews: 1100,
        tags: ['vlogging', 'photo', 'compact']
    },
    {
        id: 'p18',
        name: 'SoundLink Home',
        brand: 'Acoustix',
        category: 'Accessories',
        price: 15999,
        image: 'https://images.unsplash.com/photo-1589129140230-172393dbbe2b?auto=format&fit=crop&q=80&w=800',
        specs: {
            type: 'Smart Speaker',
            ai: 'Voice Assist',
            audio: '360 Sound'
        },
        rating: 4.4,
        reviews: 2200,
        tags: ['audio', 'smart-home', 'portable']
    },
    {
        id: 'p19',
        name: 'Swift M1 Pro',
        brand: 'NovaTech',
        category: 'Laptops',
        price: 94999,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
        specs: {
            display: '13" Retina',
            processor: 'Nova-M1',
            ram: '16GB',
            storage: '256GB'
        },
        rating: 4.7,
        reviews: 1540,
        tags: ['portable', 'productivity', 'value']
    },
    {
        id: 'p20',
        name: 'GamerX 27" QHD',
        brand: 'Apex',
        category: 'Accessories',
        price: 34999,
        image: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&q=80&w=800',
        specs: {
            panel: 'IPS 165Hz',
            resolution: '2560x1440',
            response: '1ms GTG'
        },
        rating: 4.8,
        reviews: 720,
        tags: ['gaming', 'high-perf', 'pro']
    },
    {
        id: 'p21',
        name: 'Cloud Storage Key',
        brand: 'Portal',
        category: 'Accessories',
        price: 5999,
        image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=800',
        specs: {
            capacity: '2TB Hard Drive',
            transfer: '10Gbps USB-C',
            security: 'Bio-Lock'
        },
        rating: 4.5,
        reviews: 430,
        tags: ['storage', 'portable', 'security']
    },
    {
        id: 'p22',
        name: 'BioTrack Ring',
        brand: 'BioSync',
        category: 'Smartwatches',
        price: 24999,
        image: '/assets/biotrack_ring.png',
        specs: {
            tracking: 'Sleep, Stress, Recovery',
            material: 'Titanium',
            battery: '7 Days'
        },
        rating: 4.6,
        reviews: 150,
        tags: ['health', 'wearable', 'minimalist']
    },
    {
        id: 'p23',
        name: 'Studio Mic Z',
        brand: 'Acoustix',
        category: 'Accessories',
        price: 13999,
        image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800',
        specs: {
            type: 'Condenser',
            pattern: 'Cardioid, Omni',
            connection: 'XLR/USB-C'
        },
        rating: 4.7,
        reviews: 800,
        tags: ['audio', 'creative', 'pro']
    },
    {
        id: 'p24',
        name: 'Volt Max Charger',
        brand: 'BioSync',
        category: 'Accessories',
        price: 7499,
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800',
        specs: {
            power: '140W GaN',
            ports: '3x USB-C, 1x USB-A',
            safety: 'Thermal-X'
        },
        rating: 4.9,
        reviews: 1100,
        tags: ['utility', 'charging', 'tech']
    },
    {
        id: 'p25',
        name: 'Elite Gamepad',
        brand: 'Portal',
        category: 'Gaming Consoles',
        price: 14999,
        image: '/assets/elite_gamepad.png',
        specs: {
            custom: 'Interchangeable Sticks',
            paddles: '4 Rear Buttons',
            latency: 'Sub-1ms'
        },
        rating: 4.8,
        reviews: 2100,
        tags: ['gaming', 'pro', 'popular']
    },
    {
        id: 'p26',
        name: 'Vision Pro Max X',
        brand: 'Portal',
        category: 'Gaming Consoles',
        price: 299999,
        image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800',
        specs: {
            panel: 'Dual 5K OLED',
            os: 'SpatialOS',
            gpu: 'Double-G9 Chip'
        },
        rating: 4.9,
        reviews: 45,
        tags: ['extreme', 'vr', 'future', 'premium']
    }
];

export const reviews = [
    { id: 'r1', productId: 'p1', user: 'Alex J.', rating: 5, comment: 'Simply the best phone I have ever owned. The screen is butter smooth!', date: '2024-01-15' },
    { id: 'r2', productId: 'p1', user: 'Sarah S.', rating: 4, comment: 'Great camera, but battery could be better.', date: '2024-01-10' },
    { id: 'r3', productId: 'p3', user: 'Mike D.', rating: 5, comment: 'The ANC is scary good. I can finally work in peace!', date: '2024-02-01' },
    { id: 'r4', productId: 'p15', user: 'David W.', rating: 5, comment: 'Best console ever. 4K gaming is amazing.', date: '2023-12-20' },
];

export const currentUser = null; // Start with no user
