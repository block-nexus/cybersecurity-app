// Application State with Multiple Levels
const appState = {
    currentLevel: 'introduction',
    currentQuizLevel: 'introduction',
    levels: {
        introduction: {
            name: 'Introduction',
            icon: '🌟',
            description: 'Start your cybersecurity journey here! Learn the absolute basics in the simplest terms possible.',
            color: '#06b6d4',
            lessons: [
                {
                    id: 1,
                    title: "Getting Started with Online Safety",
                    icon: "🛡️",
                    description: "Your first steps to staying safe online",
                    duration: "4 min",
                    content: {
                        introduction: "Welcome to cybersecurity! Think of the internet like a big city. Most places are safe, but you need to know how to stay safe, just like you would in a real city.",
                        sections: [
                            {
                                heading: "Why This Matters",
                                content: "Every day, millions of people use the internet. Just like you lock your house, you need to protect your digital life:",
                                points: [
                                    "Your personal information (name, address, phone number)",
                                    "Your money (bank accounts, credit cards)",
                                    "Your photos and messages",
                                    "Your devices (computer, phone, tablet)"
                                ]
                            },
                            {
                                heading: "Simple Rules to Follow",
                                content: "Here are three easy rules to remember:",
                                points: [
                                    "Rule 1: Never share your passwords with anyone",
                                    "Rule 2: Be careful what you click on",
                                    "Rule 3: Keep your software updated"
                                ]
                            },
                            {
                                heading: "You Can Do This!",
                                content: "Don't worry - protecting yourself online isn't complicated. By the end of these lessons, you'll know exactly what to do. Let's get started!"
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    title: "Your First Password",
                    icon: "🔑",
                    description: "Learn how to create a simple but safe password",
                    duration: "5 min",
                    content: {
                        introduction: "A password is like a key to your house. You want it to be something only you know, and something that's not easy for others to guess.",
                        sections: [
                            {
                                heading: "What Makes a Good Password?",
                                content: "A good password should be:",
                                points: [
                                    "At least 8 characters long",
                                    "Something you can remember",
                                    "Not your name, birthday, or 'password'",
                                    "Different from your other passwords"
                                ]
                            },
                            {
                                heading: "Easy Examples",
                                content: "Here are some simple ideas:",
                                points: [
                                    "❌ Bad: password",
                                    "❌ Bad: 123456",
                                    "✅ Good: MyCat2024!",
                                    "✅ Good: Coffee#Morning",
                                    "✅ Good: Summer@Beach2024"
                                ]
                            },
                            {
                                heading: "Remember This",
                                content: "Think of a phrase you like, then turn it into a password. For example: 'I love my dog' could become 'ILoveMyDog2024!'"
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    title: "Safe Email Habits",
                    icon: "📧",
                    description: "Learn to spot suspicious emails",
                    duration: "5 min",
                    content: {
                        introduction: "Email is one of the most common ways people try to trick you online. Learning to spot fake emails is one of the most important skills you can have.",
                        sections: [
                            {
                                heading: "Red Flags in Emails",
                                content: "Watch out for emails that:",
                                points: [
                                    "Ask for your password (real companies never do this!)",
                                    "Say 'URGENT!' or 'Act now!'",
                                    "Have lots of spelling mistakes",
                                    "Come from strange email addresses",
                                    "Ask you to click a link right away"
                                ]
                            },
                            {
                                heading: "What to Do",
                                content: "If an email seems suspicious:",
                                points: [
                                    "Don't click any links",
                                    "Don't download attachments",
                                    "Don't reply",
                                    "When in doubt, delete it",
                                    "If you're not sure, contact the company directly (not through the email)"
                                ]
                            },
                            {
                                heading: "Remember",
                                content: "Real companies will never ask for your password in an email. If someone does, it's definitely a scam!"
                            }
                        ]
                    }
                },
                {
                    id: 4,
                    title: "Safe Website Shopping",
                    icon: "🛒",
                    description: "How to shop safely online",
                    duration: "6 min",
                    content: {
                        introduction: "Shopping online is convenient, but you need to make sure you're shopping on safe websites.",
                        sections: [
                            {
                                heading: "How to Know a Website is Safe",
                                content: "Look for these signs:",
                                points: [
                                    "A padlock icon 🔒 in the address bar",
                                    "The website address starts with 'https://' (the 's' means secure)",
                                    "The website address matches the company name",
                                    "Good reviews from other customers"
                                ]
                            },
                            {
                                heading: "Warning Signs",
                                content: "Be careful if a website:",
                                points: [
                                    "Has prices that seem too good to be true",
                                    "Asks for payment in unusual ways (like gift cards)",
                                    "Has lots of spelling mistakes",
                                    "Feels rushed or pushy"
                                ]
                            },
                            {
                                heading: "Safe Shopping Tips",
                                content: "Always:",
                                points: [
                                    "Use a credit card (better protection than debit)",
                                    "Check the website address carefully",
                                    "Read reviews before buying",
                                    "Keep receipts and confirmation emails"
                                ]
                            }
                        ]
                    }
                },
                {
                    id: 5,
                    title: "Protecting Your Phone",
                    icon: "📱",
                    description: "Keep your smartphone safe",
                    duration: "5 min",
                    content: {
                        introduction: "Your phone contains a lot of personal information. Here's how to keep it safe.",
                        sections: [
                            {
                                heading: "Lock Your Phone",
                                content: "Always use a lock:",
                                points: [
                                    "Use a PIN (at least 4 digits, 6 is better)",
                                    "Or use a pattern",
                                    "Or use fingerprint/face unlock if available",
                                    "Never leave your phone unlocked"
                                ]
                            },
                            {
                                heading: "App Safety",
                                content: "Be careful with apps:",
                                points: [
                                    "Only download from official app stores (Apple App Store, Google Play)",
                                    "Read reviews before downloading",
                                    "Check what permissions apps ask for",
                                    "Delete apps you don't use"
                                ]
                            },
                            {
                                heading: "Updates",
                                content: "Keep your phone updated:",
                                points: [
                                    "Updates fix security problems",
                                    "Enable automatic updates if possible",
                                    "Don't ignore update notifications",
                                    "Updates usually only take a few minutes"
                                ]
                            }
                        ]
                    }
                },
                {
                    id: 6,
                    title: "Social Media Safety",
                    icon: "👥",
                    description: "Stay safe on social media",
                    duration: "6 min",
                    content: {
                        introduction: "Social media is fun, but you need to be careful about what you share and who you talk to.",
                        sections: [
                            {
                                heading: "What Not to Share",
                                content: "Never share these online:",
                                points: [
                                    "Your full address",
                                    "When you're going on vacation",
                                    "Your phone number publicly",
                                    "Photos of your ID, credit cards, or important documents",
                                    "Your exact location in real-time"
                                ]
                            },
                            {
                                heading: "Privacy Settings",
                                content: "Check your privacy settings:",
                                points: [
                                    "Make your profile private if possible",
                                    "Only accept friend requests from people you know",
                                    "Limit who can see your posts",
                                    "Review your settings regularly"
                                ]
                            },
                            {
                                heading: "Be Careful",
                                content: "Remember:",
                                points: [
                                    "Once you post something, it's hard to take back",
                                    "Don't share personal information in public posts",
                                    "Be careful about meeting people you only know online",
                                    "If something feels wrong, trust your instincts"
                                ]
                            }
                        ]
                    }
                }
            ],
            quiz: [
                {
                    question: "What is a good password?",
                    options: [
                        "password",
                        "123456",
                        "MyCat2024!",
                        "Your name"
                    ],
                    correct: 2,
                    explanation: "A good password should be at least 8 characters, include letters and numbers, and be something you can remember but others can't guess."
                },
                {
                    question: "Should you share your password with a company that emails you?",
                    options: [
                        "Yes, if they ask nicely",
                        "No, real companies never ask for passwords in emails",
                        "Only if the email looks official",
                        "Yes, if they say it's urgent"
                    ],
                    correct: 1,
                    explanation: "Real companies will NEVER ask for your password in an email. If someone does, it's definitely a scam - delete the email!"
                },
                {
                    question: "How can you tell if a website is safe for shopping?",
                    options: [
                        "It has low prices",
                        "It has a padlock icon and 'https://' in the address",
                        "It has lots of products",
                        "It looks fancy"
                    ],
                    correct: 1,
                    explanation: "A safe shopping website will have a padlock icon and 'https://' in the address bar. The 's' in 'https' means the connection is secure."
                },
                {
                    question: "Should you lock your phone?",
                    options: [
                        "No, it's too much trouble",
                        "Yes, always use a PIN, pattern, or fingerprint",
                        "Only when you're not using it",
                        "Only if you have important stuff on it"
                    ],
                    correct: 1,
                    explanation: "Always lock your phone! Use a PIN (at least 4-6 digits), a pattern, or fingerprint/face unlock. This protects your information if your phone is lost or stolen."
                },
                {
                    question: "What should you NOT share on social media?",
                    options: [
                        "Your vacation photos",
                        "Your full address or when you'll be away",
                        "Photos of your pets",
                        "Your favorite food"
                    ],
                    correct: 1,
                    explanation: "Never share your full address or when you'll be away from home on social media. This information can be used by criminals."
                },
                {
                    question: "Where should you download phone apps from?",
                    options: [
                        "Any website",
                        "Only from official app stores (Apple App Store, Google Play)",
                        "From email links",
                        "From pop-up ads"
                    ],
                    correct: 1,
                    explanation: "Only download apps from official app stores like the Apple App Store or Google Play Store. These stores check apps for safety."
                },
                {
                    question: "What should you do if you get a suspicious email?",
                    options: [
                        "Click the link to see what it is",
                        "Reply and ask for more information",
                        "Delete it and don't click anything",
                        "Forward it to friends"
                    ],
                    correct: 2,
                    explanation: "If an email seems suspicious, delete it immediately. Don't click any links, don't download attachments, and don't reply."
                },
                {
                    question: "Why should you keep your phone updated?",
                    options: [
                        "Updates change the color",
                        "Updates fix security problems",
                        "Updates make it slower",
                        "Updates are not important"
                    ],
                    correct: 1,
                    explanation: "Updates fix security problems that criminals could use to hack your phone. Always keep your phone updated!"
                },
                {
                    question: "What makes a website address safe?",
                    options: [
                        "It has 'www' in it",
                        "It starts with 'https://' (the 's' means secure)",
                        "It's short",
                        "It has your name in it"
                    ],
                    correct: 1,
                    explanation: "A safe website address starts with 'https://' - the 's' means the connection is secure and encrypted, protecting your information."
                },
                {
                    question: "What is the most important rule for online safety?",
                    options: [
                        "Share everything",
                        "Trust everyone",
                        "Be careful and think before you click",
                        "Use the same password everywhere"
                    ],
                    correct: 2,
                    explanation: "The most important rule is to be careful and think before you click. If something seems suspicious, trust your instincts and don't click it."
                }
            ],
            tips: [
                { icon: "🛡️", title: "Start Simple", description: "Begin with the basics. You don't need to know everything at once - take it one step at a time." },
                { icon: "🔑", title: "Use Different Passwords", description: "Don't use the same password for everything. If one account gets hacked, others stay safe." },
                { icon: "📧", title: "When in Doubt, Delete", description: "If an email seems suspicious, just delete it. It's better to be safe than sorry." },
                { icon: "🛒", title: "Check Before You Buy", description: "Look for the padlock icon and 'https://' before entering payment information online." },
                { icon: "📱", title: "Lock Your Devices", description: "Always lock your phone, tablet, and computer. It's like locking your front door." },
                { icon: "👥", title: "Think Before You Share", description: "Once you post something online, it's hard to take back. Think carefully before sharing." }
            ]
        },
        fundamentals: {
            name: 'Fundamentals',
            icon: '🌱',
            description: 'Learn core cybersecurity concepts and essential security practices in simple, easy-to-understand terms.',
            color: '#10b981',
            lessons: [
        {
            id: 1,
            title: "What is Cybersecurity?",
            icon: "🔒",
            description: "Learn the basics of cybersecurity and why it matters to you",
            duration: "5 min",
            content: {
                introduction: "Cybersecurity is like having locks on your doors and windows, but for your digital life. Just as you protect your home from burglars, cybersecurity helps protect your personal information, money, and devices from online threats.",
                sections: [
                    {
                        heading: "Why Should You Care?",
                        content: "Every day, you use the internet for banking, shopping, social media, and more. Without proper protection, cybercriminals can:",
                        points: [
                            "Steal your personal information (like your Social Security number)",
                            "Access your bank accounts and credit cards",
                            "Steal your identity",
                            "Install harmful software on your devices",
                            "Access your private photos and messages"
                        ]
                    },
                    {
                        heading: "Common Threats",
                        content: "Here are some things that can happen if you're not careful online:",
                        points: [
                            "Phishing: Fake emails or messages trying to trick you into giving away passwords",
                            "Malware: Harmful software that can damage your computer or steal information",
                            "Identity Theft: Someone using your personal information to commit fraud",
                            "Scams: Fake websites or offers designed to steal your money"
                        ]
                    },
                    {
                        heading: "The Good News",
                        content: "The good news is that protecting yourself online is easier than you might think! With a few simple steps and good habits, you can significantly reduce your risk of being a victim of cybercrime."
                    }
                ]
            }
        },
        {
            id: 2,
            title: "Strong Passwords",
            icon: "🔑",
            description: "Create passwords that are hard to guess but easy for you to remember",
            duration: "7 min",
            content: {
                introduction: "Your password is like the key to your house. If it's too simple, anyone can guess it. If it's strong and unique, it's much harder for criminals to break in.",
                sections: [
                    {
                        heading: "What Makes a Strong Password?",
                        content: "A strong password should:",
                        points: [
                            "Be at least 12 characters long (longer is better!)",
                            "Include a mix of uppercase and lowercase letters",
                            "Include numbers",
                            "Include special characters like !, @, #, $",
                            "Be unique - don't use the same password for multiple accounts"
                        ]
                    },
                    {
                        heading: "Password Examples",
                        content: "Here are some examples:",
                        points: [
                            "❌ Weak: password123",
                            "❌ Weak: 12345678",
                            "❌ Weak: qwerty",
                            "✅ Strong: MyDog$Loves2Play!",
                            "✅ Strong: Coffee#Time2024!",
                            "✅ Strong: Summer@Beach$Fun"
                        ]
                    },
                    {
                        heading: "Password Tips",
                        content: "Here are some helpful strategies:",
                        points: [
                            "Use a phrase you'll remember: 'I love hiking in the mountains!' becomes 'ILoveHiking!2024'",
                            "Don't use personal information like your name, birthday, or pet's name",
                            "Never share your passwords with anyone, even people you trust",
                            "Consider using a password manager (a secure app that remembers all your passwords)"
                        ]
                    }
                ]
            }
        },
        {
            id: 3,
            title: "Recognizing Phishing",
            icon: "🎣",
            description: "Learn to spot fake emails and messages before they trick you",
            duration: "8 min",
            content: {
                introduction: "Phishing is when criminals send you fake emails, texts, or messages that look like they're from a real company (like your bank or Amazon) to trick you into giving them your personal information.",
                sections: [
                    {
                        heading: "How Phishing Works",
                        content: "A phishing message might:",
                        points: [
                            "Claim your account will be closed if you don't act immediately",
                            "Say you've won a prize and need to provide information to claim it",
                            "Ask you to click a link to 'verify' your account",
                            "Claim there's been suspicious activity on your account",
                            "Ask for your password, Social Security number, or credit card details"
                        ]
                    },
                    {
                        heading: "Red Flags to Watch For",
                        content: "Here are warning signs that an email or message might be phishing:",
                        points: [
                            "Urgent language: 'Act now!' or 'Your account will be closed in 24 hours!'",
                            "Poor spelling and grammar",
                            "Generic greetings like 'Dear Customer' instead of your name",
                            "Suspicious email addresses (like 'amazon-support@random-site.com' instead of '@amazon.com')",
                            "Links that don't match the company's real website",
                            "Requests for sensitive information that the company should already have"
                        ]
                    },
                    {
                        heading: "What to Do",
                        content: "If you receive a suspicious message:",
                        points: [
                            "Don't click any links or download attachments",
                            "Don't reply with personal information",
                            "Contact the company directly using their official website or phone number",
                            "When in doubt, delete the message",
                            "Report phishing attempts to your email provider"
                        ]
                    }
                ]
            }
        },
        {
            id: 4,
            title: "Safe Browsing",
            icon: "🌐",
            description: "Navigate the internet safely and avoid dangerous websites",
            duration: "6 min",
            content: {
                introduction: "The internet is like a big city - most places are safe, but some neighborhoods are dangerous. Learning to browse safely helps you avoid the bad parts.",
                sections: [
                    {
                        heading: "Check the Website Address",
                        content: "Before entering any personal information, check the website address (URL):",
                        points: [
                            "Look for 'https://' at the beginning (the 's' means it's secure)",
                            "Check for a padlock icon in your browser's address bar",
                            "Make sure the website address matches the company you think you're visiting",
                            "Watch out for misspellings (like 'amazom.com' instead of 'amazon.com')"
                        ]
                    },
                    {
                        heading: "Be Careful with Downloads",
                        content: "Only download files from websites you trust:",
                        points: [
                            "Don't download files from suspicious websites or pop-up ads",
                            "Be cautious of 'free' software that seems too good to be true",
                            "Scan downloads with antivirus software before opening them",
                            "When possible, download directly from the official company website"
                        ]
                    },
                    {
                        heading: "Use Secure Wi-Fi",
                        content: "Public Wi-Fi (like at coffee shops or airports) can be risky:",
                        points: [
                            "Avoid doing banking or shopping on public Wi-Fi",
                            "If you must use public Wi-Fi, use a VPN (Virtual Private Network) if possible",
                            "Your home Wi-Fi should be password-protected",
                            "Don't access sensitive accounts on unsecured networks"
                        ]
                    }
                ]
            }
        },
        {
            id: 5,
            title: "Software Updates",
            icon: "🔄",
            description: "Why keeping your software updated is crucial for security",
            duration: "5 min",
            content: {
                introduction: "Software updates are like getting repairs done on your house. They fix security holes that criminals could use to break in.",
                sections: [
                    {
                        heading: "Why Updates Matter",
                        content: "Software companies regularly find and fix security problems. Updates include these fixes:",
                        points: [
                            "They patch security holes that hackers could exploit",
                            "They fix bugs that could cause problems",
                            "They add new security features",
                            "They keep your device running smoothly"
                        ]
                    },
                    {
                        heading: "What to Update",
                        content: "Make sure to keep these updated:",
                        points: [
                            "Your operating system (Windows, Mac, iOS, Android)",
                            "Your web browser (Chrome, Firefox, Safari, Edge)",
                            "Antivirus software",
                            "Apps on your phone and computer",
                            "Any software you use regularly"
                        ]
                    },
                    {
                        heading: "How to Update",
                        content: "Most devices can update automatically:",
                        points: [
                            "Enable automatic updates when possible",
                            "Check for updates regularly if automatic updates aren't available",
                            "Don't ignore update notifications - they're important!",
                            "Updates usually take just a few minutes and can be done while you're not using your device"
                        ]
                    }
                ]
            }
        },
        {
            id: 6,
            title: "Two-Factor Authentication",
            icon: "🔐",
            description: "Add an extra layer of security to your accounts",
            duration: "6 min",
            content: {
                introduction: "Two-factor authentication (2FA) is like having two locks on your door instead of one. Even if someone gets your password, they still can't get in without the second key.",
                sections: [
                    {
                        heading: "How It Works",
                        content: "With 2FA, you need two things to log in:",
                        points: [
                            "Something you know (your password)",
                            "Something you have (like your phone or a special code)",
                            "When you log in, you'll enter your password, then get a code on your phone to enter",
                            "This code changes every time and expires quickly"
                        ]
                    },
                    {
                        heading: "Why Use It?",
                        content: "2FA makes your accounts much more secure:",
                        points: [
                            "Even if someone steals your password, they can't access your account",
                            "You'll get a notification if someone tries to log in",
                            "It's free and easy to set up",
                            "Most major websites and apps offer it"
                        ]
                    },
                    {
                        heading: "Where to Enable It",
                        content: "Enable 2FA on your most important accounts:",
                        points: [
                            "Email accounts (Gmail, Outlook, etc.)",
                            "Banking and financial accounts",
                            "Social media (Facebook, Instagram, Twitter)",
                            "Shopping sites (Amazon, PayPal)",
                            "Cloud storage (Google Drive, Dropbox)"
                        ],
                        note: "Look for 'Security' or 'Privacy' settings in your account to enable 2FA. It's usually called 'Two-Step Verification' or 'Two-Factor Authentication'."
                    }
                ]
            }
        }
        ],
        quiz: [
        {
            question: "What is the minimum recommended length for a strong password?",
            options: [
                "6 characters",
                "8 characters",
                "12 characters",
                "4 characters"
            ],
            correct: 2,
            explanation: "A strong password should be at least 12 characters long. Longer passwords are harder for criminals to guess or crack."
        },
        {
            question: "Which of these is a sign of a phishing email?",
            options: [
                "It uses your real name",
                "It has urgent language like 'Act now!'",
                "It comes from a company you know",
                "It has good spelling and grammar"
            ],
            correct: 1,
            explanation: "Phishing emails often use urgent language to pressure you into acting quickly without thinking. Legitimate companies rarely use such tactics."
        },
        {
            question: "What does 'https://' in a website address tell you?",
            options: [
                "The website is free",
                "The website is secure",
                "The website is fast",
                "The website is popular"
            ],
            correct: 1,
            explanation: "The 's' in 'https://' stands for 'secure'. It means the connection between your browser and the website is encrypted, protecting your information."
        },
        {
            question: "Why are software updates important?",
            options: [
                "They make your device faster",
                "They fix security holes that hackers could exploit",
                "They change the color of your screen",
                "They delete your files"
            ],
            correct: 1,
            explanation: "Software updates patch security vulnerabilities that criminals could use to access your device or steal your information."
        },
        {
            question: "What is two-factor authentication (2FA)?",
            options: [
                "Using two different passwords",
                "Logging in from two different devices",
                "Using your password plus a code from your phone",
                "Having two email addresses"
            ],
            correct: 2,
            explanation: "Two-factor authentication requires both your password (something you know) and a code from your phone (something you have), making your account much more secure."
        },
        {
            question: "Which of these is a strong password?",
            options: [
                "password123",
                "12345678",
                "MyDog$Loves2Play!",
                "qwerty"
            ],
            correct: 2,
            explanation: "A strong password should be long, include a mix of letters (upper and lowercase), numbers, and special characters. 'MyDog$Loves2Play!' meets all these criteria."
        },
        {
            question: "What should you do if you receive a suspicious email asking for your password?",
            options: [
                "Reply with your password",
                "Click the link in the email",
                "Delete the email and contact the company directly",
                "Forward it to all your friends"
            ],
            correct: 2,
            explanation: "Legitimate companies never ask for your password via email. If you're unsure, delete the email and contact the company through their official website or phone number."
        },
        {
            question: "When should you avoid doing online banking?",
            options: [
                "On your home Wi-Fi",
                "On public Wi-Fi networks",
                "On your phone",
                "In the morning"
            ],
            correct: 1,
            explanation: "Public Wi-Fi networks are often unsecured, making it easier for criminals to intercept your information. Always use secure, password-protected networks for sensitive activities."
        },
        {
            question: "What should you enable 2FA on first?",
            options: [
                "Only social media accounts",
                "Only shopping websites",
                "Your most important accounts like email and banking",
                "Only accounts you rarely use"
            ],
            correct: 2,
            explanation: "Start by enabling 2FA on your most critical accounts - email, banking, and financial services. These contain the most sensitive information."
        },
        {
            question: "What is malware?",
            options: [
                "A type of email",
                "Harmful software that can damage your computer or steal information",
                "A type of password",
                "A secure website"
            ],
            correct: 1,
            explanation: "Malware (malicious software) is harmful software designed to damage your computer, steal your information, or give criminals access to your device."
        }
        ],
        tips: [
        {
            icon: "🔒",
            title: "Use Unique Passwords",
            description: "Never reuse passwords across different accounts. If one account gets hacked, all your accounts could be at risk."
        },
        {
            icon: "📧",
            title: "Verify Before You Trust",
            description: "If an email or message seems suspicious, contact the company directly using their official website or phone number."
        },
        {
            icon: "🔍",
            title: "Check URLs Carefully",
            description: "Before entering personal information, verify the website address matches the company you think you're visiting."
        },
        {
            icon: "🔄",
            title: "Keep Software Updated",
            description: "Enable automatic updates on all your devices. Updates often include important security fixes."
        },
        {
            icon: "🔐",
            title: "Enable 2FA",
            description: "Add two-factor authentication to your important accounts. It's free and significantly increases your security."
        },
        {
            icon: "📱",
            title: "Lock Your Devices",
            description: "Use a PIN, password, or biometric lock (fingerprint/face ID) on all your devices."
        },
        {
            icon: "🚫",
            title: "Don't Share Passwords",
            description: "Never share your passwords with anyone, even people you trust. Legitimate companies will never ask for your password."
        },
        {
            icon: "💾",
            title: "Back Up Your Data",
            description: "Regularly back up important files to an external drive or cloud service. This protects you from ransomware and device failures."
        },
        {
            icon: "🛡️",
            title: "Use Antivirus Software",
            description: "Install reputable antivirus software and keep it updated. It helps protect against malware and viruses."
        },
        {
            icon: "👀",
            title: "Be Skeptical",
            description: "If something online seems too good to be true, it probably is. Be cautious of offers that seem unrealistic."
        }
        ]
    },
    practitioner: {
        name: 'Practitioner',
        icon: '📖',
        description: 'Apply your knowledge with practical security practices, real-world scenarios, and hands-on techniques.',
        color: '#14b8a6',
        lessons: [
            {
                id: 1,
                title: "Understanding Online Threats",
                icon: "⚠️",
                description: "Learn about common online dangers and how to recognize them",
                duration: "7 min",
                content: {
                    introduction: "Now that you know the basics, let's learn more about the specific threats you might encounter online and how to spot them.",
                    sections: [
                        {
                            heading: "Types of Online Threats",
                            content: "Here are the main threats to watch out for:",
                            points: [
                                "Phishing: Fake emails or messages trying to trick you into giving away information",
                                "Malware: Bad software that can harm your computer or steal information",
                                "Scams: Fake offers designed to steal your money",
                                "Identity Theft: Someone using your personal information",
                                "Ransomware: Software that locks your files until you pay"
                            ]
                        },
                        {
                            heading: "How to Spot Phishing",
                            content: "Phishing emails often have these warning signs:",
                            points: [
                                "Urgent language: 'Your account will be closed!' or 'Act immediately!'",
                                "Poor spelling and grammar",
                                "Generic greetings like 'Dear Customer' instead of your name",
                                "Suspicious email addresses that don't match the company",
                                "Asking for passwords, Social Security numbers, or credit card info"
                            ]
                        },
                        {
                            heading: "Protecting Yourself",
                            content: "Simple steps to stay safe:",
                            points: [
                                "Never click links in suspicious emails - go to the website directly",
                                "Don't download files from unknown sources",
                                "Keep your software updated",
                                "Use antivirus software",
                                "Back up your important files regularly"
                            ]
                        }
                    ]
                }
            },
            {
                id: 2,
                title: "Better Password Practices",
                icon: "🔐",
                description: "Learn advanced password techniques and password managers",
                duration: "8 min",
                content: {
                    introduction: "You already know the basics of passwords. Now let's learn how to make them even stronger and easier to manage.",
                    sections: [
                        {
                            heading: "Strong Password Rules",
                            content: "A really strong password should:",
                            points: [
                                "Be at least 12 characters long (longer is better!)",
                                "Mix uppercase and lowercase letters",
                                "Include numbers",
                                "Include special characters (!, @, #, $, etc.)",
                                "Be unique - different for each account"
                            ]
                        },
                        {
                            heading: "Password Manager Basics",
                            content: "A password manager is like a safe for your passwords:",
                            points: [
                                "Stores all your passwords securely",
                                "Creates strong, unique passwords for you",
                                "You only need to remember one master password",
                                "Popular options: LastPass, 1Password, Bitwarden, Dashlane",
                                "Many are free or have free versions"
                            ]
                        },
                        {
                            heading: "Creating Memorable Strong Passwords",
                            content: "If you don't use a password manager, try this:",
                            points: [
                                "Pick a phrase you'll remember: 'I love hiking in the mountains!'",
                                "Turn it into a password: 'ILoveHiking!2024'",
                                "Add special characters and numbers",
                                "Make it unique for each site by adding the site name",
                                "Example for Amazon: 'ILoveHiking!Amazon2024'"
                            ]
                        },
                        {
                            heading: "What Never to Use",
                            content: "Never use these in passwords:",
                            points: [
                                "Your name, birthday, or pet's name",
                                "Common words like 'password' or '123456'",
                                "Personal information others might know",
                                "The same password for multiple accounts"
                            ]
                        }
                    ]
                }
            },
            {
                id: 3,
                title: "Secure Browsing Practices",
                icon: "🌐",
                description: "Learn to browse the internet safely and recognize safe websites",
                duration: "7 min",
                content: {
                    introduction: "The internet is full of websites, but not all of them are safe. Learning to browse safely protects you from many threats.",
                    sections: [
                        {
                            heading: "Checking Website Safety",
                            content: "Before entering personal information, always check:",
                            points: [
                                "Look for 'https://' at the start (the 's' means secure)",
                                "Check for a padlock icon in the address bar",
                                "Make sure the website address matches the company",
                                "Watch for misspellings (like 'amazom.com' instead of 'amazon.com')",
                                "Read reviews if it's a new site to you"
                            ]
                        },
                        {
                            heading: "Safe Downloading",
                            content: "Only download files from:",
                            points: [
                                "Official company websites",
                                "Trusted app stores",
                                "Never from pop-up ads or suspicious emails",
                                "Scan downloads with antivirus before opening",
                                "When in doubt, don't download"
                            ]
                        },
                        {
                            heading: "Public Wi-Fi Safety",
                            content: "Public Wi-Fi (coffee shops, airports) can be risky:",
                            points: [
                                "Avoid doing banking or shopping on public Wi-Fi",
                                "Don't access sensitive accounts",
                                "If you must use it, use a VPN if possible",
                                "Your home Wi-Fi should always be password-protected",
                                "Consider using mobile data for sensitive activities"
                            ]
                        },
                        {
                            heading: "Browser Safety Tips",
                            content: "Keep your browser safe:",
                            points: [
                                "Keep your browser updated",
                                "Use browser security features",
                                "Clear cookies and cache regularly",
                                "Be careful with browser extensions",
                                "Use private/incognito mode for sensitive browsing"
                            ]
                        }
                    ]
                }
            },
            {
                id: 4,
                title: "Software Updates & Security",
                icon: "🔄",
                description: "Understand why updates are crucial and how to manage them",
                duration: "6 min",
                content: {
                    introduction: "Software updates aren't just about new features - they're critical for your security. Understanding why helps you stay protected.",
                    sections: [
                        {
                            heading: "Why Updates Matter",
                            content: "Updates fix security problems:",
                            points: [
                                "Companies find security holes and fix them in updates",
                                "Criminals look for outdated software to attack",
                                "Updates patch these holes before criminals can use them",
                                "Without updates, you're vulnerable to known attacks",
                                "It's like fixing a broken lock on your door"
                            ]
                        },
                        {
                            heading: "What to Update",
                            content: "Keep these updated:",
                            points: [
                                "Your operating system (Windows, Mac, iOS, Android)",
                                "Your web browser (Chrome, Firefox, Safari, Edge)",
                                "Antivirus software",
                                "All apps on your devices",
                                "Any software you use regularly"
                            ]
                        },
                        {
                            heading: "How to Update",
                            content: "Updating is usually easy:",
                            points: [
                                "Enable automatic updates when possible",
                                "Check for updates regularly if automatic isn't available",
                                "Don't ignore update notifications",
                                "Updates usually take just a few minutes",
                                "You can often schedule updates for when you're not using your device"
                            ]
                        },
                        {
                            heading: "Update Best Practices",
                            content: "Tips for safe updating:",
                            points: [
                                "Back up important files before major updates",
                                "Update when you have time (not right before important work)",
                                "Make sure you have a stable internet connection",
                                "Don't turn off your device during updates",
                                "Restart your device after updates if prompted"
                            ]
                        }
                    ]
                }
            },
            {
                id: 5,
                title: "Two-Factor Authentication Explained",
                icon: "🔒",
                description: "Learn what 2FA is and how to set it up on your accounts",
                duration: "8 min",
                content: {
                    introduction: "Two-factor authentication (2FA) adds an extra layer of security to your accounts. It's like having two locks on your door instead of one.",
                    sections: [
                        {
                            heading: "How 2FA Works",
                            content: "With 2FA, you need two things to log in:",
                            points: [
                                "Something you know: Your password",
                                "Something you have: Your phone (for a code)",
                                "When you log in, you enter your password first",
                                "Then you get a code on your phone to enter",
                                "This code changes every time and expires quickly"
                            ]
                        },
                        {
                            heading: "Why Use 2FA?",
                            content: "2FA makes your accounts much safer:",
                            points: [
                                "Even if someone steals your password, they can't get in",
                                "You'll get a notification if someone tries to log in",
                                "It's free and easy to set up",
                                "Most major websites and apps offer it",
                                "It significantly reduces the chance of account theft"
                            ]
                        },
                        {
                            heading: "Where to Enable 2FA",
                            content: "Enable 2FA on these important accounts first:",
                            points: [
                                "Email accounts (Gmail, Outlook, Yahoo)",
                                "Banking and financial accounts",
                                "Social media (Facebook, Instagram, Twitter)",
                                "Shopping sites (Amazon, PayPal)",
                                "Cloud storage (Google Drive, Dropbox, iCloud)"
                            ]
                        },
                        {
                            heading: "How to Set It Up",
                            content: "Setting up 2FA is usually simple:",
                            points: [
                                "Go to your account settings",
                                "Look for 'Security' or 'Privacy' settings",
                                "Find 'Two-Factor Authentication' or 'Two-Step Verification'",
                                "Follow the instructions (usually involves your phone number)",
                                "Test it to make sure it works",
                                "Keep backup codes in a safe place"
                            ]
                        }
                    ]
                }
            },
            {
                id: 6,
                title: "Backing Up Your Data",
                icon: "💾",
                description: "Learn why backups are important and how to back up your files",
                duration: "7 min",
                content: {
                    introduction: "Backing up your data means making copies of your important files. If something goes wrong, you can restore your files from the backup.",
                    sections: [
                        {
                            heading: "Why Backups Matter",
                            content: "Backups protect you from:",
                            points: [
                                "Ransomware: If your files are locked, you can restore from backup",
                                "Device failure: If your computer breaks, your files are safe",
                                "Accidental deletion: You can recover deleted files",
                                "Theft or loss: If your device is stolen, your data is backed up",
                                "Natural disasters: Fire, flood, etc."
                            ]
                        },
                        {
                            heading: "What to Back Up",
                            content: "Back up these important files:",
                            points: [
                                "Photos and videos",
                                "Important documents",
                                "Work files",
                                "Financial records",
                                "Anything you can't easily replace"
                            ]
                        },
                        {
                            heading: "Backup Options",
                            content: "You can back up to:",
                            points: [
                                "External hard drive: Physical device you connect",
                                "Cloud storage: Online services (Google Drive, iCloud, Dropbox, OneDrive)",
                                "USB flash drive: For smaller amounts of data",
                                "Network drive: If you have a home network",
                                "Best practice: Use multiple methods (3-2-1 rule: 3 copies, 2 different media, 1 offsite)"
                            ]
                        },
                        {
                            heading: "Backup Best Practices",
                            content: "How to back up effectively:",
                            points: [
                                "Back up regularly (daily or weekly)",
                                "Automate backups when possible",
                                "Test your backups to make sure they work",
                                "Keep backups in different locations",
                                "Encrypt sensitive backups",
                                "Don't wait until it's too late - start backing up now!"
                            ]
                        }
                    ]
                }
            }
        ],
        quiz: [
            {
                question: "What is phishing?",
                options: [
                    "A type of fish",
                    "Fake emails or messages trying to trick you into giving away information",
                    "A type of password",
                    "A safe website"
                ],
                correct: 1,
                explanation: "Phishing is when criminals send fake emails or messages that look like they're from real companies to trick you into giving away your personal information or passwords."
            },
            {
                question: "How long should a strong password be?",
                options: [
                    "At least 4 characters",
                    "At least 8 characters",
                    "At least 12 characters",
                    "At least 6 characters"
                ],
                correct: 2,
                explanation: "A strong password should be at least 12 characters long. Longer passwords are much harder for criminals to guess or crack."
            },
            {
                question: "What is a password manager?",
                options: [
                    "A person who remembers your passwords",
                    "A secure app that stores and creates strong passwords for you",
                    "A type of password",
                    "A website where you store passwords"
                ],
                correct: 1,
                explanation: "A password manager is a secure app that stores all your passwords and can create strong, unique passwords for each of your accounts. You only need to remember one master password."
            },
            {
                question: "What does 'https://' tell you about a website?",
                options: [
                    "The website is free",
                    "The website is secure - the connection is encrypted",
                    "The website is fast",
                    "The website is popular"
                ],
                correct: 1,
                explanation: "The 's' in 'https://' stands for 'secure'. It means the connection between your browser and the website is encrypted, protecting your information."
            },
            {
                question: "Why are software updates important?",
                options: [
                    "They make your device faster",
                    "They fix security holes that criminals could exploit",
                    "They change the color of your screen",
                    "They delete your files"
                ],
                correct: 1,
                explanation: "Software updates fix security vulnerabilities that criminals could use to hack your device or steal your information. They're essential for security."
            },
            {
                question: "What is two-factor authentication (2FA)?",
                options: [
                    "Using two different passwords",
                    "Using your password plus a code from your phone",
                    "Logging in from two different devices",
                    "Having two email addresses"
                ],
                correct: 1,
                explanation: "Two-factor authentication requires both your password (something you know) and a code from your phone (something you have), making your account much more secure."
            },
            {
                question: "What should you back up?",
                options: [
                    "Nothing, it's not important",
                    "Only photos",
                    "Important files like photos, documents, and work files",
                    "Only documents"
                ],
                correct: 2,
                explanation: "You should back up all important files including photos, videos, documents, work files, and anything you can't easily replace. Backups protect you from data loss."
            },
            {
                question: "Is it safe to do online banking on public Wi-Fi?",
                options: [
                    "Yes, it's always safe",
                    "No, avoid doing banking or shopping on public Wi-Fi",
                    "Only if the Wi-Fi has a password",
                    "Only in the morning"
                ],
                correct: 1,
                explanation: "Public Wi-Fi networks are often unsecured, making it easier for criminals to intercept your information. Avoid doing banking or shopping on public Wi-Fi."
            },
            {
                question: "What is the 3-2-1 backup rule?",
                options: [
                    "Back up 3 times, use 2 methods, keep 1 copy",
                    "3 copies of data, 2 different media types, 1 offsite copy",
                    "Back up every 3 days, use 2 devices, keep for 1 year",
                    "3 passwords, 2 backups, 1 location"
                ],
                correct: 1,
                explanation: "The 3-2-1 backup rule means: 3 copies of your data, stored on 2 different types of media, with 1 copy kept offsite (like in the cloud)."
            },
            {
                question: "What should you do if you receive a suspicious email asking for your password?",
                options: [
                    "Reply with your password",
                    "Click the link in the email",
                    "Delete the email - real companies never ask for passwords",
                    "Forward it to friends"
                ],
                correct: 2,
                explanation: "Real companies will NEVER ask for your password via email. If you receive such an email, delete it immediately. It's definitely a scam."
            }
        ],
        tips: [
            { icon: "⚠️", title: "Recognize Threats", description: "Learn to spot phishing emails, suspicious websites, and common scams. Knowledge is your best defense." },
            { icon: "🔐", title: "Use Password Managers", description: "Consider using a password manager to create and store strong, unique passwords for all your accounts." },
            { icon: "🌐", title: "Browse Safely", description: "Always check for 'https://' and the padlock icon before entering personal information on websites." },
            { icon: "🔄", title: "Update Regularly", description: "Enable automatic updates on all your devices. Updates fix security problems that criminals exploit." },
            { icon: "🔒", title: "Enable 2FA Everywhere", description: "Add two-factor authentication to all your important accounts. It's free and significantly increases security." },
            { icon: "💾", title: "Back Up Regularly", description: "Back up your important files regularly. Use the 3-2-1 rule: 3 copies, 2 media types, 1 offsite." }
        ]
    },
    intermediate: {
        name: 'Intermediate',
        icon: '📚',
        description: 'Build on the basics with more technical details, practical implementation, and deeper understanding of security mechanisms.',
        color: '#3b82f6',
        lessons: [
            {
                id: 1,
                title: "Cryptography Fundamentals",
                icon: "🔐",
                description: "Understand encryption, hashing, and cryptographic protocols",
                duration: "12 min",
                content: {
                    introduction: "Cryptography is the foundation of digital security. It's the science of encoding information so that only authorized parties can read it. Understanding cryptography helps you understand how security actually works.",
                    sections: [
                        {
                            heading: "Symmetric vs Asymmetric Encryption",
                            content: "There are two main types of encryption:",
                            points: [
                                "Symmetric Encryption: Uses the same key to encrypt and decrypt. Fast and efficient, but requires secure key exchange. Examples: AES (Advanced Encryption Standard), used in Wi-Fi (WPA2/WPA3).",
                                "Asymmetric Encryption: Uses a pair of keys - public (for encryption) and private (for decryption). Solves the key exchange problem. Examples: RSA, ECC (Elliptic Curve Cryptography), used in SSL/TLS.",
                                "Hybrid Approach: Most systems use both - asymmetric for key exchange, symmetric for actual data encryption (faster)."
                            ]
                        },
                        {
                            heading: "Hashing Functions",
                            content: "Hashing converts data into a fixed-size string. Key properties:",
                            points: [
                                "One-way: Cannot reverse a hash to get original data",
                                "Deterministic: Same input always produces same hash",
                                "Avalanche effect: Small input change creates completely different hash",
                                "Common algorithms: SHA-256 (used in Bitcoin), bcrypt (for passwords), Argon2 (modern password hashing)"
                            ]
                        },
                        {
                            heading: "Digital Signatures",
                            content: "Digital signatures prove authenticity and integrity:",
                            points: [
                                "Created using private key, verified using public key",
                                "Proves the message hasn't been tampered with",
                                "Proves the sender's identity (non-repudiation)",
                                "Used in SSL certificates, code signing, email security (DKIM)"
                            ]
                        },
                        {
                            heading: "Practical Applications",
                            content: "Where you encounter cryptography daily:",
                            points: [
                                "HTTPS: Encrypts web traffic using TLS (Transport Layer Security)",
                                "Password Storage: Passwords are hashed, never stored in plain text",
                                "VPN: Encrypts all your internet traffic",
                                "Messaging Apps: End-to-end encryption (Signal, WhatsApp)",
                                "File Encryption: Encrypting sensitive files before storing"
                            ]
                        }
                    ]
                }
            },
            {
                id: 2,
                title: "Network Security",
                icon: "🌐",
                description: "Learn about firewalls, VPNs, network protocols, and secure communications",
                duration: "15 min",
                content: {
                    introduction: "Network security protects data as it travels across networks. Understanding how networks work helps you understand vulnerabilities and protections.",
                    sections: [
                        {
                            heading: "Firewalls",
                            content: "Firewalls control network traffic:",
                            points: [
                                "Packet Filtering: Examines each packet's header (source, destination, port)",
                                "Stateful Inspection: Tracks connections and context",
                                "Application Layer: Inspects actual application data (deep packet inspection)",
                                "Next-Generation Firewalls: Combine traditional firewall with intrusion prevention, application control"
                            ]
                        },
                        {
                            heading: "VPN (Virtual Private Network)",
                            content: "VPNs create secure tunnels:",
                            points: [
                                "Encrypts all traffic between your device and VPN server",
                                "Hides your IP address and location",
                                "Protects on public Wi-Fi networks",
                                "Types: SSL VPN (web-based), IPsec VPN (site-to-site), WireGuard (modern, fast)"
                            ]
                        },
                        {
                            heading: "Network Protocols",
                            content: "Understanding secure protocols:",
                            points: [
                                "HTTPS: HTTP over TLS/SSL - encrypts web traffic",
                                "SSH: Secure Shell - encrypted remote access (port 22)",
                                "SFTP: Secure File Transfer Protocol",
                                "DNS over HTTPS (DoH): Encrypts DNS queries",
                                "TLS 1.3: Latest version, faster and more secure than TLS 1.2"
                            ]
                        },
                        {
                            heading: "Common Network Attacks",
                            content: "What to protect against:",
                            points: [
                                "Man-in-the-Middle (MITM): Attacker intercepts communication",
                                "DNS Spoofing: Redirects traffic to malicious sites",
                                "ARP Poisoning: Redirects traffic on local network",
                                "Port Scanning: Finding open ports and services",
                                "DDoS: Overwhelming servers with traffic"
                            ]
                        }
                    ]
                }
            },
            {
                id: 3,
                title: "Authentication & Authorization",
                icon: "🛡️",
                description: "Deep dive into authentication methods, OAuth, SAML, and access control",
                duration: "14 min",
                content: {
                    introduction: "Authentication (who you are) and authorization (what you can do) are fundamental security concepts. Understanding them helps you implement proper access controls.",
                    sections: [
                        {
                            heading: "Authentication Factors",
                            content: "Three types of factors:",
                            points: [
                                "Something you know: Password, PIN, security questions",
                                "Something you have: Smart card, security token, phone (SMS/authenticator app)",
                                "Something you are: Biometrics (fingerprint, face, iris)",
                                "Multi-factor authentication (MFA) combines multiple factors for stronger security"
                            ]
                        },
                        {
                            heading: "OAuth 2.0 & OpenID Connect",
                            content: "Modern authorization protocols:",
                            points: [
                                "OAuth 2.0: Allows apps to access resources without sharing passwords",
                                "Authorization Code Flow: Most secure, uses redirects",
                                "OpenID Connect: Built on OAuth 2.0, adds identity layer",
                                "Used by: 'Sign in with Google/Facebook', API access"
                            ]
                        },
                        {
                            heading: "SAML (Security Assertion Markup Language)",
                            content: "Enterprise single sign-on:",
                            points: [
                                "XML-based protocol for exchanging authentication data",
                                "Enables SSO (Single Sign-On) across organizations",
                                "Common in enterprise environments",
                                "Identity Provider (IdP) vs Service Provider (SP)"
                            ]
                        },
                        {
                            heading: "Access Control Models",
                            content: "How permissions are managed:",
                            points: [
                                "RBAC (Role-Based Access Control): Permissions based on roles",
                                "ABAC (Attribute-Based Access Control): Permissions based on attributes (user, resource, environment)",
                                "DAC (Discretionary Access Control): Resource owner controls access",
                                "MAC (Mandatory Access Control): System-enforced, used in high-security environments"
                            ]
                        }
                    ]
                }
            },
            {
                id: 4,
                title: "Malware Analysis",
                icon: "🦠",
                description: "Understand different types of malware, how they work, and how to detect them",
                duration: "13 min",
                content: {
                    introduction: "Malware (malicious software) comes in many forms. Understanding how different types work helps you defend against them.",
                    sections: [
                        {
                            heading: "Types of Malware",
                            content: "Common malware categories:",
                            points: [
                                "Virus: Attaches to files, requires user action to spread",
                                "Worm: Self-replicating, spreads automatically across networks",
                                "Trojan: Disguised as legitimate software",
                                "Ransomware: Encrypts files and demands payment",
                                "Spyware: Secretly collects information",
                                "Rootkit: Hides deep in system, hard to detect"
                            ]
                        },
                        {
                            heading: "How Malware Spreads",
                            content: "Common infection vectors:",
                            points: [
                                "Email attachments: Malicious files in emails",
                                "Drive-by downloads: Visiting compromised websites",
                                "USB devices: Infected removable media",
                                "Social engineering: Tricking users to install",
                                "Exploiting vulnerabilities: Unpatched software",
                                "Supply chain attacks: Compromised legitimate software"
                            ]
                        },
                        {
                            heading: "Detection Methods",
                            content: "How to identify malware:",
                            points: [
                                "Signature-based: Matches known malware patterns (traditional antivirus)",
                                "Heuristic analysis: Detects suspicious behavior patterns",
                                "Behavioral analysis: Monitors what programs do",
                                "Sandboxing: Runs suspicious code in isolated environment",
                                "Machine learning: AI-powered detection of new threats"
                            ]
                        },
                        {
                            heading: "Prevention & Response",
                            content: "Best practices:",
                            points: [
                                "Keep software updated: Patches fix vulnerabilities",
                                "Use antivirus/anti-malware: Multiple layers of protection",
                                "Be cautious with downloads: Only from trusted sources",
                                "Regular backups: Can recover from ransomware",
                                "Network segmentation: Limits spread if infected",
                                "Incident response plan: Know what to do if infected"
                            ]
                        }
                    ]
                }
            },
            {
                id: 5,
                title: "Security Architecture",
                icon: "🏗️",
                description: "Learn defense in depth, security layers, and secure system design",
                duration: "16 min",
                content: {
                    introduction: "Security architecture is about designing systems with security built in from the start, not added as an afterthought.",
                    sections: [
                        {
                            heading: "Defense in Depth",
                            content: "Multiple layers of security:",
                            points: [
                                "Network layer: Firewalls, IDS/IPS, network segmentation",
                                "Host layer: Antivirus, host-based firewalls, hardening",
                                "Application layer: Secure coding, input validation, authentication",
                                "Data layer: Encryption at rest and in transit",
                                "Physical layer: Access controls, surveillance",
                                "If one layer fails, others provide protection"
                            ]
                        },
                        {
                            heading: "Zero Trust Architecture",
                            content: "Modern security model:",
                            points: [
                                "Never trust, always verify: Every access request is verified",
                                "Least privilege: Minimum access necessary",
                                "Micro-segmentation: Network divided into small segments",
                                "Continuous monitoring: Constant verification",
                                "Assume breach: Design as if network is compromised"
                            ]
                        },
                        {
                            heading: "Secure Design Principles",
                            content: "Fundamental principles:",
                            points: [
                                "Fail securely: Default to deny, not allow",
                                "Least privilege: Users get minimum access needed",
                                "Separation of duties: Critical tasks require multiple people",
                                "Defense in depth: Multiple security layers",
                                "Secure by default: Secure configuration out of the box",
                                "Keep it simple: Complexity increases vulnerabilities"
                            ]
                        },
                        {
                            heading: "Security Frameworks",
                            content: "Common frameworks:",
                            points: [
                                "NIST Cybersecurity Framework: Risk-based approach",
                                "ISO 27001: Information security management",
                                "CIS Controls: Prioritized security actions",
                                "OWASP Top 10: Web application security risks",
                                "SANS Critical Security Controls: Practical security measures"
                            ]
                        }
                    ]
                }
            },
            {
                id: 6,
                title: "Incident Response",
                icon: "🚨",
                description: "Learn how to detect, respond to, and recover from security incidents",
                duration: "14 min",
                content: {
                    introduction: "Security incidents are inevitable. Having a plan and knowing how to respond minimizes damage and recovery time.",
                    sections: [
                        {
                            heading: "Incident Response Lifecycle",
                            content: "The standard process (NIST framework):",
                            points: [
                                "Preparation: Policies, procedures, tools, training",
                                "Detection & Analysis: Identifying incidents, understanding scope",
                                "Containment: Stopping the threat from spreading",
                                "Eradication: Removing the threat completely",
                                "Recovery: Restoring systems to normal operation",
                                "Post-Incident Activity: Lessons learned, documentation"
                            ]
                        },
                        {
                            heading: "Detection Methods",
                            content: "How to identify incidents:",
                            points: [
                                "SIEM (Security Information and Event Management): Centralized log analysis",
                                "IDS/IPS: Network intrusion detection/prevention",
                                "Endpoint Detection and Response (EDR): Advanced endpoint monitoring",
                                "User reports: Employees reporting suspicious activity",
                                "Threat intelligence: External information about threats"
                            ]
                        },
                        {
                            heading: "Containment Strategies",
                            content: "Stopping the threat:",
                            points: [
                                "Short-term: Immediate actions (disconnect from network, disable accounts)",
                                "Long-term: Complete removal, system rebuilds if necessary",
                                "Isolation: Separate affected systems",
                                "Backup: Preserve evidence for analysis",
                                "Communication: Notify stakeholders, legal, law enforcement if needed"
                            ]
                        },
                        {
                            heading: "Forensics & Analysis",
                            content: "Understanding what happened:",
                            points: [
                                "Preserve evidence: Don't modify compromised systems",
                                "Memory analysis: Extract running processes, network connections",
                                "Disk imaging: Create forensic copies",
                                "Log analysis: Review system and application logs",
                                "Timeline reconstruction: Understand attack sequence",
                                "Attribution: Identify threat actors (if possible)"
                            ]
                        }
                    ]
                }
            }
        ],
        quiz: [
            {
                question: "What is the main difference between symmetric and asymmetric encryption?",
                options: [
                    "Symmetric is faster, asymmetric is slower",
                    "Symmetric uses one key, asymmetric uses a key pair",
                    "Symmetric is for files, asymmetric is for networks",
                    "There is no difference"
                ],
                correct: 1,
                explanation: "Symmetric encryption uses a single shared key for both encryption and decryption, while asymmetric encryption uses a public-private key pair. This fundamental difference solves the key exchange problem."
            },
            {
                question: "What does a hash function do?",
                options: [
                    "Encrypts data so it can be decrypted",
                    "Converts data into a fixed-size string that cannot be reversed",
                    "Compresses files to save space",
                    "Creates digital signatures"
                ],
                correct: 1,
                explanation: "Hash functions are one-way functions that convert data into a fixed-size string. They cannot be reversed, making them ideal for password storage and data integrity verification."
            },
            {
                question: "What is the primary purpose of a firewall?",
                options: [
                    "To encrypt network traffic",
                    "To control and filter network traffic",
                    "To store passwords securely",
                    "To detect malware"
                ],
                correct: 1,
                explanation: "Firewalls control network traffic by filtering packets based on rules. They act as a barrier between trusted and untrusted networks."
            },
            {
                question: "What does OAuth 2.0 provide?",
                options: [
                    "File encryption",
                    "Delegated authorization without sharing passwords",
                    "Network routing",
                    "Malware detection"
                ],
                correct: 1,
                explanation: "OAuth 2.0 is an authorization protocol that allows applications to access resources on behalf of users without requiring them to share their passwords."
            },
            {
                question: "What is defense in depth?",
                options: [
                    "Using multiple passwords",
                    "Multiple layers of security controls",
                    "Encrypting data multiple times",
                    "Having multiple firewalls"
                ],
                correct: 1,
                explanation: "Defense in depth is a security strategy that uses multiple layers of security controls. If one layer fails, others provide protection."
            },
            {
                question: "What is the containment phase of incident response?",
                options: [
                    "Removing the threat completely",
                    "Isolating affected systems to prevent further damage",
                    "Identifying the incident",
                    "Learning from the incident"
                ],
                correct: 1,
                explanation: "Containment is about stopping the threat from spreading and causing further damage. This happens before eradication and recovery."
            },
            {
                question: "What is Zero Trust architecture?",
                options: [
                    "Trusting no one",
                    "Never trust, always verify - verify every access request",
                    "Only trusting internal networks",
                    "Trusting verified users completely"
                ],
                correct: 1,
                explanation: "Zero Trust is a security model that assumes no implicit trust. Every access request must be verified, regardless of location or user."
            },
            {
                question: "What is the principle of least privilege?",
                options: [
                    "Users should have maximum permissions",
                    "Users should only have minimum permissions needed for their role",
                    "All users should have the same permissions",
                    "Permissions should be randomly assigned"
                ],
                correct: 1,
                explanation: "The principle of least privilege states that users should only be granted the minimum permissions necessary to perform their job functions."
            },
            {
                question: "What is ransomware?",
                options: [
                    "Malware that steals passwords",
                    "Malware that encrypts files and demands payment",
                    "Malware that spreads through email",
                    "A type of firewall"
                ],
                correct: 1,
                explanation: "Ransomware is malicious software that encrypts a victim's files and demands payment (ransom) to restore access to the encrypted data."
            },
            {
                question: "What does TLS stand for?",
                options: [
                    "Transport Layer Security",
                    "Total Layer Security",
                    "Transmission Link Security",
                    "Trusted Layer Service"
                ],
                correct: 0,
                explanation: "TLS (Transport Layer Security) is a cryptographic protocol that provides secure communication over networks. It's the successor to SSL."
            }
        ],
        tips: [
            { icon: "🔐", title: "Use Strong Encryption", description: "Always use TLS 1.3 or latest version for web traffic. Encrypt sensitive data at rest and in transit." },
            { icon: "🌐", title: "Secure Your Network", description: "Use VPNs on public Wi-Fi, enable firewall, and segment your network to limit breach impact." },
            { icon: "🛡️", title: "Implement MFA", description: "Multi-factor authentication significantly reduces account compromise risk. Use it everywhere possible." },
            { icon: "🦠", title: "Monitor for Threats", description: "Use security monitoring tools, keep logs, and watch for suspicious activity patterns." },
            { icon: "🏗️", title: "Design Securely", description: "Build security into systems from the start. Use defense in depth and follow secure design principles." },
            { icon: "🚨", title: "Have a Response Plan", description: "Prepare incident response procedures before incidents happen. Practice and update regularly." }
        ]
    },
    expert: {
        name: 'Expert',
        icon: '🎓',
        description: 'Advanced topics including penetration testing, security operations, threat intelligence, and enterprise security.',
        color: '#8b5cf6',
        lessons: [
            {
                id: 1,
                title: "Penetration Testing",
                icon: "🎯",
                description: "Learn ethical hacking, vulnerability assessment, and security testing methodologies",
                duration: "18 min",
                content: {
                    introduction: "Penetration testing (pen testing) is authorized simulated attacks on systems to identify vulnerabilities before malicious actors exploit them.",
                    sections: [
                        {
                            heading: "Penetration Testing Methodology",
                            content: "Standard frameworks:",
                            points: [
                                "PTES (Penetration Testing Execution Standard): 7 phases - pre-engagement, intelligence gathering, threat modeling, vulnerability analysis, exploitation, post-exploitation, reporting",
                                "OWASP Testing Guide: Web application focused methodology",
                                "NIST SP 800-115: Technical guide for information security testing",
                                "Each phase builds on previous, systematic approach ensures thorough testing"
                            ]
                        },
                        {
                            heading: "Reconnaissance & Information Gathering",
                            content: "Gathering intelligence:",
                            points: [
                                "Passive: OSINT (Open Source Intelligence) - public records, social media, DNS records, WHOIS",
                                "Active: Port scanning (Nmap), service enumeration, banner grabbing",
                                "DNS enumeration: Finding subdomains, DNS records",
                                "Social engineering: Gathering information about employees, organizational structure",
                                "Tools: Nmap, Shodan, Maltego, theHarvester, Recon-ng"
                            ]
                        },
                        {
                            heading: "Vulnerability Assessment",
                            content: "Identifying weaknesses:",
                            points: [
                                "Automated scanners: Nessus, OpenVAS, Qualys - find known vulnerabilities",
                                "Manual testing: Code review, configuration review, logic flaws",
                                "Common vulnerabilities: OWASP Top 10, CWE Top 25",
                                "CVSS scoring: Common Vulnerability Scoring System rates severity",
                                "False positive analysis: Verifying scanner results"
                            ]
                        },
                        {
                            heading: "Exploitation Techniques",
                            content: "Common attack vectors:",
                            points: [
                                "SQL Injection: Exploiting database queries",
                                "Cross-Site Scripting (XSS): Injecting malicious scripts",
                                "Buffer Overflows: Exploiting memory management flaws",
                                "Privilege Escalation: Gaining higher-level access",
                                "Post-exploitation: Maintaining access, lateral movement, data exfiltration",
                                "Tools: Metasploit, Burp Suite, SQLMap, BeEF"
                            ]
                        },
                        {
                            heading: "Reporting & Remediation",
                            content: "Delivering value:",
                            points: [
                                "Executive summary: High-level overview for management",
                                "Technical details: Step-by-step exploitation, proof of concept",
                                "Risk assessment: Impact, likelihood, business risk",
                                "Remediation recommendations: Prioritized fixes",
                                "Follow-up testing: Verifying fixes were effective"
                            ]
                        }
                    ]
                }
            },
            {
                id: 2,
                title: "Security Operations Center (SOC)",
                icon: "🛡️",
                description: "Understanding SOC operations, SIEM, threat hunting, and security monitoring",
                duration: "17 min",
                content: {
                    introduction: "A Security Operations Center (SOC) is a centralized team that monitors, detects, and responds to security threats 24/7.",
                    sections: [
                        {
                            heading: "SOC Functions",
                            content: "Core responsibilities:",
                            points: [
                                "Continuous monitoring: Watching networks, systems, applications 24/7",
                                "Threat detection: Identifying security events and incidents",
                                "Incident response: Coordinating response to security incidents",
                                "Threat hunting: Proactively searching for threats",
                                "Vulnerability management: Tracking and prioritizing vulnerabilities",
                                "Compliance: Ensuring security controls meet regulatory requirements"
                            ]
                        },
                        {
                            heading: "SIEM (Security Information and Event Management)",
                            content: "Central nervous system of SOC:",
                            points: [
                                "Log aggregation: Collecting logs from all systems",
                                "Event correlation: Connecting related events across systems",
                                "Alerting: Notifying analysts of security events",
                                "Dashboards: Visualizing security posture",
                                "Forensics: Historical log analysis",
                                "Tools: Splunk, IBM QRadar, ArcSight, Elastic Security"
                            ]
                        },
                        {
                            heading: "Threat Hunting",
                            content: "Proactive threat detection:",
                            points: [
                                "Hypothesis-driven: Testing theories about threats",
                                "Indicator-driven: Searching for known IOCs (Indicators of Compromise)",
                                "TTP-based: Looking for specific Tactics, Techniques, Procedures",
                                "Anomaly detection: Finding unusual patterns",
                                "Threat intelligence: Using external threat data",
                                "MITRE ATT&CK framework: Common framework for threat hunting"
                            ]
                        },
                        {
                            heading: "SOC Tiers & Roles",
                            content: "Organizational structure:",
                            points: [
                                "Tier 1: Initial triage, basic analysis, alert filtering",
                                "Tier 2: Deep analysis, incident investigation, escalation",
                                "Tier 3: Advanced analysis, threat hunting, tool development",
                                "SOC Manager: Overall operations, strategy, reporting",
                                "Threat Intelligence Analyst: External threat research",
                                "Incident Response Coordinator: Managing incident response"
                            ]
                        },
                        {
                            heading: "Metrics & KPIs",
                            content: "Measuring SOC effectiveness:",
                            points: [
                                "MTTR (Mean Time to Respond): How quickly incidents are addressed",
                                "MTTD (Mean Time to Detect): How quickly threats are found",
                                "False positive rate: Reducing noise",
                                "Alert volume: Managing analyst workload",
                                "Incident closure rate: Successfully resolved incidents",
                                "Threat detection coverage: Percentage of threats detected"
                            ]
                        }
                    ]
                }
            },
            {
                id: 3,
                title: "Threat Intelligence",
                icon: "🔍",
                description: "Learn about threat actors, IOCs, threat modeling, and intelligence-driven security",
                duration: "16 min",
                content: {
                    introduction: "Threat intelligence is evidence-based knowledge about threats that helps organizations make informed security decisions.",
                    sections: [
                        {
                            heading: "Types of Threat Intelligence",
                            content: "Intelligence levels:",
                            points: [
                                "Strategic: High-level trends, threat landscape, business risk",
                                "Tactical: TTPs (Tactics, Techniques, Procedures), IOCs, threat actor methods",
                                "Operational: Specific attacks, campaigns, threat actor activities",
                                "Technical: IOCs (hashes, IPs, domains), malware samples, exploit code",
                                "Each level serves different audiences and use cases"
                            ]
                        },
                        {
                            heading: "Indicators of Compromise (IOCs)",
                            content: "Evidence of security incidents:",
                            points: [
                                "File hashes: MD5, SHA-256 of malicious files",
                                "IP addresses: Command and control servers, malicious IPs",
                                "Domain names: Malicious domains, DGA (Domain Generation Algorithm) patterns",
                                "URLs: Phishing sites, malware download locations",
                                "Email addresses: Phishing senders, malicious attachments",
                                "Registry keys: Persistence mechanisms",
                                "Behavioral indicators: Unusual network traffic, process execution"
                            ]
                        },
                        {
                            heading: "Threat Actors",
                            content: "Understanding adversaries:",
                            points: [
                                "APT (Advanced Persistent Threat): Sophisticated, long-term campaigns",
                                "Cybercriminals: Financially motivated, ransomware, fraud",
                                "Hacktivists: Politically motivated, data leaks, DDoS",
                                "Nation-states: Government-sponsored, espionage, critical infrastructure",
                                "Insider threats: Malicious or negligent employees",
                                "Script kiddies: Low-skilled attackers using tools"
                            ]
                        },
                        {
                            heading: "Threat Intelligence Sources",
                            content: "Where intelligence comes from:",
                            points: [
                                "OSINT: Open source intelligence - public information",
                                "Commercial feeds: Paid threat intelligence providers",
                                "Information sharing: ISACs (Information Sharing and Analysis Centers)",
                                "Honeypots: Decoy systems that attract attackers",
                                "Malware analysis: Reverse engineering malicious software",
                                "Dark web monitoring: Monitoring underground forums, markets"
                            ]
                        },
                        {
                            heading: "Threat Modeling",
                            content: "Systematic threat analysis:",
                            points: [
                                "STRIDE: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege",
                                "DREAD: Damage, Reproducibility, Exploitability, Affected users, Discoverability",
                                "Attack trees: Visual representation of attack paths",
                                "Threat actor profiles: Understanding capabilities and motivations",
                                "Risk assessment: Likelihood × Impact"
                            ]
                        }
                    ]
                }
            },
            {
                id: 4,
                title: "Cloud Security",
                icon: "☁️",
                description: "Security in cloud environments, shared responsibility model, and cloud-specific threats",
                duration: "17 min",
                content: {
                    introduction: "Cloud security requires understanding shared responsibility, cloud-specific threats, and proper configuration of cloud services.",
                    sections: [
                        {
                            heading: "Shared Responsibility Model",
                            content: "Who's responsible for what:",
                            points: [
                                "Cloud provider: Infrastructure security, physical security, hypervisor security",
                                "Customer: Data security, access management, application security, configuration",
                                "IaaS (Infrastructure as a Service): Customer responsible for OS, applications, data",
                                "PaaS (Platform as a Service): Provider manages OS, customer manages applications",
                                "SaaS (Software as a Service): Provider manages most, customer manages data and access",
                                "Understanding boundaries is critical for security"
                            ]
                        },
                        {
                            heading: "Cloud Security Challenges",
                            content: "Unique cloud risks:",
                            points: [
                                "Misconfiguration: Public S3 buckets, exposed databases, default credentials",
                                "Insufficient identity and access management: Overprivileged accounts, weak MFA",
                                "Insecure APIs: Public APIs without authentication, API key exposure",
                                "Account hijacking: Compromised credentials, session hijacking",
                                "Data breaches: Inadequate encryption, data loss",
                                "Insider threats: Malicious or negligent cloud administrators"
                            ]
                        },
                        {
                            heading: "Cloud Security Best Practices",
                            content: "Securing cloud environments:",
                            points: [
                                "Identity and Access Management: Strong authentication, least privilege, regular access reviews",
                                "Encryption: Encrypt data at rest and in transit, manage keys properly",
                                "Network security: VPCs, security groups, network segmentation",
                                "Monitoring and logging: CloudTrail, CloudWatch, centralized logging",
                                "Compliance: Understand regulatory requirements (GDPR, HIPAA, PCI-DSS)",
                                "Incident response: Cloud-specific response procedures"
                            ]
                        },
                        {
                            heading: "Cloud Security Tools",
                            content: "Specialized cloud security solutions:",
                            points: [
                                "CSPM (Cloud Security Posture Management): Detects misconfigurations",
                                "CWPP (Cloud Workload Protection Platform): Protects workloads",
                                "CASB (Cloud Access Security Broker): Monitors cloud usage",
                                "SIEM integration: Cloud logs in SIEM",
                                "Native tools: AWS Security Hub, Azure Security Center, GCP Security Command Center"
                            ]
                        },
                        {
                            heading: "Multi-Cloud Security",
                            content: "Managing multiple cloud providers:",
                            points: [
                                "Consistent security policies across providers",
                                "Centralized identity management",
                                "Unified monitoring and logging",
                                "Vendor lock-in considerations",
                                "Compliance across different regions"
                            ]
                        }
                    ]
                }
            },
            {
                id: 5,
                title: "Security Compliance & Governance",
                icon: "📋",
                description: "Understanding regulations, compliance frameworks, and security governance",
                duration: "15 min",
                content: {
                    introduction: "Compliance ensures organizations meet legal and regulatory requirements. Governance provides oversight and ensures security aligns with business objectives.",
                    sections: [
                        {
                            heading: "Major Regulations",
                            content: "Key compliance requirements:",
                            points: [
                                "GDPR (General Data Protection Regulation): EU data privacy, right to be forgotten, data breach notification",
                                "HIPAA (Health Insurance Portability and Accountability Act): US healthcare data protection",
                                "PCI-DSS (Payment Card Industry Data Security Standard): Credit card data protection",
                                "SOX (Sarbanes-Oxley): Financial reporting and controls",
                                "CCPA (California Consumer Privacy Act): California data privacy rights",
                                "Each has specific requirements and penalties for non-compliance"
                            ]
                        },
                        {
                            heading: "Security Frameworks",
                            content: "Structured approaches to security:",
                            points: [
                                "ISO 27001: International information security management standard",
                                "NIST Cybersecurity Framework: Risk-based approach, five functions (Identify, Protect, Detect, Respond, Recover)",
                                "CIS Controls: 20 prioritized security controls",
                                "COBIT: Governance and management framework",
                                "CMMC (Cybersecurity Maturity Model Certification): US DoD contractor requirements"
                            ]
                        },
                        {
                            heading: "Governance Components",
                            content: "Security governance structure:",
                            points: [
                                "Policies: High-level statements of intent",
                                "Standards: Mandatory requirements",
                                "Procedures: Step-by-step instructions",
                                "Guidelines: Recommended practices",
                                "Roles and responsibilities: Who does what",
                                "Risk management: Identifying, assessing, treating risks"
                            ]
                        },
                        {
                            heading: "Audits & Assessments",
                            content: "Verifying compliance:",
                            points: [
                                "Internal audits: Self-assessment of controls",
                                "External audits: Third-party verification",
                                "Penetration testing: Technical security testing",
                                "Vulnerability assessments: Finding security weaknesses",
                                "Compliance gap analysis: Comparing current state to requirements",
                                "Remediation planning: Addressing gaps"
                            ]
                        }
                    ]
                }
            },
            {
                id: 6,
                title: "Advanced Threat Detection",
                icon: "🔬",
                description: "EDR, XDR, behavioral analysis, and advanced detection techniques",
                duration: "18 min",
                content: {
                    introduction: "Advanced threat detection goes beyond signature-based detection to identify sophisticated, evasive threats using behavioral analysis and AI.",
                    sections: [
                        {
                            heading: "EDR (Endpoint Detection and Response)",
                            content: "Advanced endpoint security:",
                            points: [
                                "Continuous monitoring: Real-time endpoint activity monitoring",
                                "Behavioral analysis: Detecting anomalous behavior patterns",
                                "Threat hunting: Proactive search for threats",
                                "Incident response: Automated and manual response capabilities",
                                "Forensics: Detailed endpoint activity logs",
                                "Tools: CrowdStrike Falcon, SentinelOne, Microsoft Defender for Endpoint"
                            ]
                        },
                        {
                            heading: "XDR (Extended Detection and Response)",
                            content: "Unified security platform:",
                            points: [
                                "Cross-domain correlation: Endpoint, network, cloud, email",
                                "Automated investigation: AI-powered threat analysis",
                                "Unified visibility: Single pane of glass",
                                "Automated response: Orchestrated remediation",
                                "Threat intelligence integration: External threat data",
                                "Reduces alert fatigue and improves detection"
                            ]
                        },
                        {
                            heading: "Behavioral Analysis",
                            content: "Detecting anomalies:",
                            points: [
                                "Baseline establishment: Understanding normal behavior",
                                "Anomaly detection: Identifying deviations from baseline",
                                "Machine learning: AI models for pattern recognition",
                                "User and Entity Behavior Analytics (UEBA): Analyzing user behavior",
                                "Network Traffic Analysis (NTA): Analyzing network behavior",
                                "Reduces false positives, detects unknown threats"
                            ]
                        },
                        {
                            heading: "Threat Hunting Techniques",
                            content: "Proactive threat detection:",
                            points: [
                                "Hypothesis-driven: Testing theories about threats",
                                "IOC-based: Searching for known indicators",
                                "TTP-based: Looking for attack patterns (MITRE ATT&CK)",
                                "Anomaly-based: Finding unusual patterns",
                                "Threat intelligence-driven: Using external threat data",
                                "Tools: YARA rules, Sigma rules, custom queries"
                            ]
                        },
                        {
                            heading: "Deception Technology",
                            content: "Honeypots and decoys:",
                            points: [
                                "Honeypots: Decoy systems that attract attackers",
                                "Honeynets: Networks of honeypots",
                                "Honeyfiles: Decoy files that alert when accessed",
                                "Honeytokens: Fake credentials, API keys",
                                "Early warning system: Detect attackers before they reach real systems",
                                "Intelligence gathering: Learn attacker techniques"
                            ]
                        }
                    ]
                }
            }
        ],
        quiz: [
            {
                question: "What is the first phase of penetration testing?",
                options: [
                    "Exploitation",
                    "Reconnaissance and information gathering",
                    "Reporting",
                    "Vulnerability scanning"
                ],
                correct: 1,
                explanation: "Reconnaissance and information gathering is the first phase, where testers collect intelligence about the target before attempting any attacks."
            },
            {
                question: "What does SIEM stand for?",
                options: [
                    "Security Incident and Event Management",
                    "Security Information and Event Management",
                    "System Information and Event Monitoring",
                    "Secure Information Exchange Mechanism"
                ],
                correct: 1,
                explanation: "SIEM (Security Information and Event Management) systems aggregate and analyze security logs from multiple sources."
            },
            {
                question: "What is an IOC?",
                options: [
                    "International Organization for Compliance",
                    "Indicator of Compromise - evidence of a security incident",
                    "Internal Operations Center",
                    "Internet Operations Command"
                ],
                correct: 1,
                explanation: "IOC (Indicator of Compromise) is evidence that a security incident has occurred, such as malicious IP addresses, file hashes, or domain names."
            },
            {
                question: "In the cloud shared responsibility model, who is responsible for application security in IaaS?",
                options: [
                    "Cloud provider",
                    "Customer",
                    "Both equally",
                    "Third-party security vendor"
                ],
                correct: 1,
                explanation: "In IaaS, the customer is responsible for the operating system, applications, and data security, while the provider manages the infrastructure."
            },
            {
                question: "What does GDPR primarily protect?",
                options: [
                    "Financial data",
                    "EU citizens' personal data and privacy",
                    "Healthcare records",
                    "Credit card information"
                ],
                correct: 1,
                explanation: "GDPR (General Data Protection Regulation) protects EU citizens' personal data and privacy rights, with strict requirements for data handling."
            },
            {
                question: "What is the main advantage of XDR over traditional EDR?",
                options: [
                    "It's cheaper",
                    "Cross-domain correlation and unified visibility across endpoints, network, cloud, and email",
                    "It requires less configuration",
                    "It only works in the cloud"
                ],
                correct: 1,
                explanation: "XDR provides cross-domain correlation, giving unified visibility and automated investigation across multiple security domains."
            },
            {
                question: "What is threat hunting?",
                options: [
                    "Waiting for alerts",
                    "Proactively searching for threats that haven't triggered alerts",
                    "Scanning for vulnerabilities",
                    "Penetration testing"
                ],
                correct: 1,
                explanation: "Threat hunting is the proactive search for threats that haven't been detected by automated security tools, using hypothesis-driven or intelligence-driven approaches."
            },
            {
                question: "What does PTES stand for?",
                options: [
                    "Penetration Testing Execution Standard",
                    "Professional Technical Evaluation System",
                    "Post-Traumatic Event Syndrome",
                    "Platform Testing and Evaluation Service"
                ],
                correct: 0,
                explanation: "PTES (Penetration Testing Execution Standard) is a comprehensive methodology for conducting penetration tests with seven distinct phases."
            },
            {
                question: "What is a honeypot?",
                options: [
                    "A type of malware",
                    "A decoy system designed to attract attackers",
                    "A security tool for encryption",
                    "A network protocol"
                ],
                correct: 1,
                explanation: "A honeypot is a decoy system designed to attract attackers, allowing security teams to study attack techniques and gather threat intelligence."
            },
            {
                question: "What is UEBA?",
                options: [
                    "User and Entity Behavior Analytics - analyzing user behavior for anomalies",
                    "Universal Endpoint Behavior Analysis",
                    "Unified Enterprise Backup Architecture",
                    "User Experience and Behavior Assessment"
                ],
                correct: 0,
                explanation: "UEBA (User and Entity Behavior Analytics) uses machine learning to analyze user and entity behavior patterns to detect anomalies and potential threats."
            }
        ],
        tips: [
            { icon: "🎯", title: "Practice Ethical Hacking", description: "Set up lab environments, practice penetration testing techniques, and stay current with attack methods." },
            { icon: "🛡️", title: "Monitor Continuously", description: "Implement SIEM, EDR, and continuous monitoring. Security is 24/7, not 9-to-5." },
            { icon: "🔍", title: "Hunt Proactively", description: "Don't wait for alerts. Proactively hunt for threats using threat intelligence and behavioral analysis." },
            { icon: "☁️", title: "Secure Cloud Properly", description: "Understand shared responsibility, configure cloud services securely, and monitor cloud environments." },
            { icon: "📋", title: "Govern Security", description: "Establish policies, procedures, and governance. Ensure security aligns with business objectives." },
            { icon: "🔬", title: "Use Advanced Detection", description: "Go beyond signatures. Use behavioral analysis, AI, and advanced detection techniques." }
        ]
    },
    master: {
        name: 'Master',
        icon: '👑',
        description: 'Master-level topics: advanced threat research, zero-day exploits, security research methodologies, and cutting-edge defense techniques.',
        color: '#f59e0b',
        lessons: [
            {
                id: 1,
                title: "Zero-Day Research & Exploitation",
                icon: "💎",
                description: "Understanding zero-day vulnerabilities, exploit development, and responsible disclosure",
                duration: "20 min",
                content: {
                    introduction: "Zero-day vulnerabilities are unknown security flaws with no available patch. Understanding them requires deep technical knowledge and ethical responsibility.",
                    sections: [
                        {
                            heading: "Zero-Day Lifecycle",
                            content: "From discovery to patch:",
                            points: [
                                "Discovery: Finding the vulnerability through fuzzing, code review, or reverse engineering",
                                "Exploitation: Developing proof-of-concept exploit",
                                "Weaponization: Creating reliable, scalable exploit",
                                "Disclosure: Responsible disclosure vs full disclosure debate",
                                "Patch development: Vendor creates fix",
                                "Deployment: Patch distributed to users",
                                "Threat actors may exploit during window between discovery and patch"
                            ]
                        },
                        {
                            heading: "Vulnerability Research Methods",
                            content: "Finding zero-days:",
                            points: [
                                "Fuzzing: Automated input generation to find crashes and vulnerabilities",
                                "Static analysis: Code review, binary analysis without execution",
                                "Dynamic analysis: Runtime analysis, debugging, instrumentation",
                                "Symbolic execution: Exploring all possible execution paths",
                                "Reverse engineering: Understanding compiled code",
                                "Patch analysis: Analyzing security patches to find underlying vulnerabilities",
                                "Tools: AFL, LibFuzzer, IDA Pro, Ghidra, WinDbg, GDB"
                            ]
                        },
                        {
                            heading: "Exploit Development",
                            content: "Creating working exploits:",
                            points: [
                                "Understanding vulnerability: Root cause analysis",
                                "Exploitability: Can vulnerability be reliably exploited?",
                                "Exploit primitives: Building blocks (read/write, code execution)",
                                "Bypassing mitigations: ASLR, DEP, stack canaries, CFI",
                                "Reliability: Making exploit work consistently",
                                "Weaponization: Making it user-friendly for attackers",
                                "Ethical considerations: Responsible disclosure, bug bounties"
                            ]
                        },
                        {
                            heading: "Exploit Mitigations",
                            content: "Modern protections:",
                            points: [
                                "ASLR (Address Space Layout Randomization): Randomizes memory addresses",
                                "DEP/NX (Data Execution Prevention): Prevents code execution in data regions",
                                "Stack Canaries: Detects stack buffer overflows",
                                "CFI (Control Flow Integrity): Prevents control flow hijacking",
                                "Sandboxing: Isolating processes",
                                "Hypervisor-based protections: Hardware-level isolation",
                                "Exploit developers must bypass these for successful exploitation"
                            ]
                        },
                        {
                            heading: "Responsible Disclosure",
                            content: "Ethical vulnerability handling:",
                            points: [
                                "Coordinated disclosure: Working with vendor before public disclosure",
                                "Disclosure timeline: Typically 90 days, can be extended",
                                "Bug bounty programs: Rewards for finding vulnerabilities",
                                "CVE assignment: Common Vulnerabilities and Exposures identifier",
                                "CVSS scoring: Severity rating",
                                "Full disclosure debate: Immediate public disclosure vs coordinated",
                                "Legal considerations: Computer Fraud and Abuse Act, responsible disclosure laws"
                            ]
                        }
                    ]
                }
            },
            {
                id: 2,
                title: "Advanced Persistent Threats (APTs)",
                icon: "🕵️",
                description: "Understanding nation-state actors, APT groups, advanced attack techniques, and long-term campaigns",
                duration: "19 min",
                content: {
                    introduction: "APTs are sophisticated, long-term attack campaigns typically associated with nation-states. Understanding them requires deep knowledge of attack techniques and threat actor behavior.",
                    sections: [
                        {
                            heading: "APT Characteristics",
                            content: "What makes an attack an APT:",
                            points: [
                                "Advanced: Sophisticated techniques, custom malware, zero-days",
                                "Persistent: Long-term presence, months or years",
                                "Threat: Organized, well-funded, specific objectives",
                                "Stealth: Designed to avoid detection",
                                "Targeted: Specific organizations or industries",
                                "Multi-stage: Complex attack chains",
                                "Attribution: Often difficult, may involve nation-states"
                            ]
                        },
                        {
                            heading: "Famous APT Groups",
                            content: "Notable threat actors:",
                            points: [
                                "APT1 (Comment Crew): Chinese military unit, extensive operations",
                                "APT28 (Fancy Bear): Russian GRU, political targets",
                                "APT29 (Cozy Bear): Russian SVR, long-term espionage",
                                "Lazarus Group: North Korean, financial and destructive attacks",
                                "Equation Group: Highly sophisticated, linked to NSA",
                                "Sandworm: Russian, critical infrastructure attacks",
                                "Each has distinct TTPs, tools, and targets"
                            ]
                        },
                        {
                            heading: "APT Attack Lifecycle",
                            content: "Kill chain phases:",
                            points: [
                                "Reconnaissance: Extensive target research, OSINT",
                                "Weaponization: Custom malware, zero-days",
                                "Delivery: Spear-phishing, supply chain, watering holes",
                                "Exploitation: Initial compromise",
                                "Installation: Establishing persistence",
                                "Command & Control: C2 infrastructure",
                                "Actions on Objectives: Data exfiltration, sabotage, espionage",
                                "Living off the land: Using legitimate tools to avoid detection"
                            ]
                        },
                        {
                            heading: "Advanced Techniques",
                            content: "Sophisticated methods:",
                            points: [
                                "Supply chain attacks: Compromising software vendors",
                                "Watering hole attacks: Compromising websites frequented by targets",
                                "Fileless malware: Running in memory, no files on disk",
                                "Living off the land: Using built-in OS tools (PowerShell, WMI)",
                                "Domain fronting: Hiding C2 traffic",
                                "Staged payloads: Downloading additional components after initial access",
                                "Anti-forensics: Erasing logs, timestomping"
                            ]
                        },
                        {
                            heading: "Detection & Response",
                            content: "Defending against APTs:",
                            points: [
                                "Threat intelligence: Understanding APT TTPs",
                                "Behavioral detection: Looking for APT patterns",
                                "Network monitoring: Detecting C2 communications",
                                "Endpoint detection: Advanced EDR, memory analysis",
                                "Threat hunting: Proactive search for APT activity",
                                "Incident response: Long-term investigation, containment",
                                "Attribution: Understanding threat actors (optional, difficult)"
                            ]
                        }
                    ]
                }
            },
            {
                id: 3,
                title: "Security Research Methodologies",
                icon: "🔬",
                description: "Scientific approaches to security research, vulnerability analysis, and security innovation",
                duration: "18 min",
                content: {
                    introduction: "Security research requires systematic methodologies, rigorous analysis, and ethical considerations. Understanding research methods helps advance the field.",
                    sections: [
                        {
                            heading: "Research Process",
                            content: "Systematic approach:",
                            points: [
                                "Problem identification: What security problem to solve?",
                                "Literature review: What's already known?",
                                "Hypothesis formation: What do you expect to find?",
                                "Methodology design: How will you test the hypothesis?",
                                "Experimentation: Conducting tests, analysis",
                                "Results analysis: Interpreting findings",
                                "Publication: Sharing results (papers, advisories, tools)",
                                "Peer review: Validation by other researchers"
                            ]
                        },
                        {
                            heading: "Vulnerability Research",
                            content: "Finding security flaws:",
                            points: [
                                "Target selection: What to analyze (software, protocols, hardware)",
                                "Attack surface analysis: What's exposed?",
                                "Threat modeling: What could go wrong?",
                                "Testing methodologies: Fuzzing, code review, reverse engineering",
                                "Exploit development: Proving exploitability",
                                "Impact assessment: What's the risk?",
                                "Documentation: Detailed write-ups, proof of concepts"
                            ]
                        },
                        {
                            heading: "Reverse Engineering",
                            content: "Understanding compiled code:",
                            points: [
                                "Static analysis: Analyzing code without execution (disassembly, decompilation)",
                                "Dynamic analysis: Runtime analysis (debugging, tracing)",
                                "Hybrid approach: Combining static and dynamic",
                                "Tools: IDA Pro, Ghidra, Binary Ninja, Radare2",
                                "Malware analysis: Understanding malicious code",
                                "Protocol analysis: Understanding network protocols",
                                "Firmware analysis: Embedded systems, IoT devices"
                            ]
                        },
                        {
                            heading: "Fuzzing Techniques",
                            content: "Automated vulnerability discovery:",
                            points: [
                                "Coverage-guided fuzzing: AFL, LibFuzzer - tracks code coverage",
                                "Generation-based: Creating inputs from scratch",
                                "Mutation-based: Mutating existing inputs",
                                "Grammar-based: Using input grammars",
                                "Symbolic execution: Exploring all paths",
                                "Hybrid fuzzing: Combining techniques",
                                "Continuous fuzzing: Running continuously in CI/CD"
                            ]
                        },
                        {
                            heading: "Security Innovation",
                            content: "Advancing the field:",
                            points: [
                                "New attack techniques: Discovering novel attack vectors",
                                "Defense mechanisms: Creating new protections",
                                "Tools and frameworks: Building security tools",
                                "Standards development: Contributing to security standards",
                                "Education: Teaching others, writing papers",
                                "Open source: Contributing to security tools",
                                "Conferences: Presenting research (Black Hat, DEF CON, RSA)"
                            ]
                        }
                    ]
                }
            },
            {
                id: 4,
                title: "Hardware Security",
                icon: "⚙️",
                description: "Hardware-level security, side-channel attacks, trusted computing, and hardware vulnerabilities",
                duration: "19 min",
                content: {
                    introduction: "Hardware security involves protecting systems at the physical and hardware level, including CPUs, memory, and embedded systems.",
                    sections: [
                        {
                            heading: "Hardware Attack Vectors",
                            content: "Physical and hardware threats:",
                            points: [
                                "Side-channel attacks: Extracting secrets through physical properties (timing, power, electromagnetic)",
                                "Fault injection: Introducing errors to extract secrets",
                                "Hardware trojans: Malicious modifications to hardware",
                                "Supply chain attacks: Compromised hardware during manufacturing",
                                "Rowhammer: Exploiting DRAM vulnerabilities",
                                "Spectre/Meltdown: CPU speculative execution vulnerabilities",
                                "Physical access attacks: Direct hardware manipulation"
                            ]
                        },
                        {
                            heading: "Side-Channel Attacks",
                            content: "Extracting secrets indirectly:",
                            points: [
                                "Timing attacks: Measuring execution time differences",
                                "Power analysis: Analyzing power consumption patterns",
                                "Electromagnetic: Capturing electromagnetic emissions",
                                "Cache attacks: Exploiting CPU cache behavior",
                                "Acoustic: Analyzing sound from operations",
                                "Mitigations: Constant-time algorithms, masking, isolation"
                            ]
                        },
                        {
                            heading: "Trusted Computing",
                            content: "Hardware-based security:",
                            points: [
                                "TPM (Trusted Platform Module): Hardware security chip",
                                "Secure Boot: Verifying boot process integrity",
                                "Measured Boot: Recording boot measurements",
                                "Attestation: Proving system integrity",
                                "Intel TXT, AMD SVM: Hardware-based isolation",
                                "ARM TrustZone: Secure world isolation",
                                "Hardware security modules (HSM): Dedicated security hardware"
                            ]
                        },
                        {
                            heading: "CPU Vulnerabilities",
                            content: "Modern CPU security issues:",
                            points: [
                                "Spectre: Speculative execution attack, reading memory",
                                "Meltdown: Reading kernel memory",
                                "MDS (Microarchitectural Data Sampling): Various CPU vulnerabilities",
                                "L1TF (L1 Terminal Fault): Reading L1 cache",
                                "Mitigations: Microcode updates, OS patches, performance impact",
                                "Ongoing research: New vulnerabilities discovered regularly"
                            ]
                        },
                        {
                            heading: "Embedded Systems Security",
                            content: "IoT and embedded device security:",
                            points: [
                                "Firmware security: Securing device firmware",
                                "Secure boot: Verifying firmware integrity",
                                "Hardware security modules: Protecting keys",
                                "JTAG security: Securing debugging interfaces",
                                "Supply chain: Ensuring hardware integrity",
                                "Lifecycle management: Secure updates, end-of-life handling"
                            ]
                        }
                    ]
                }
            },
            {
                id: 5,
                title: "AI/ML Security",
                icon: "🤖",
                description: "Adversarial machine learning, AI security, model poisoning, and securing AI systems",
                duration: "20 min",
                content: {
                    introduction: "As AI and machine learning become pervasive, understanding their security implications is critical. AI systems have unique vulnerabilities and attack vectors.",
                    sections: [
                        {
                            heading: "Adversarial Machine Learning",
                            content: "Attacking AI systems:",
                            points: [
                                "Adversarial examples: Inputs designed to fool ML models",
                                "Evasion attacks: Crafting inputs to evade detection",
                                "Poisoning attacks: Corrupting training data",
                                "Model extraction: Stealing ML models through queries",
                                "Membership inference: Determining if data was in training set",
                                "Model inversion: Reconstructing training data from model",
                                "Real-world impact: Self-driving cars, facial recognition, malware detection"
                            ]
                        },
                        {
                            heading: "AI Security Threats",
                            content: "Unique AI vulnerabilities:",
                            points: [
                                "Data poisoning: Injecting malicious data into training sets",
                                "Model theft: Stealing proprietary models",
                                "Adversarial perturbations: Small changes that fool models",
                                "Backdoor attacks: Hidden triggers in models",
                                "Model evasion: Bypassing AI-based security systems",
                                "Privacy attacks: Extracting sensitive information from models",
                                "Supply chain: Compromised AI libraries, pre-trained models"
                            ]
                        },
                        {
                            heading: "Defending AI Systems",
                            content: "Protecting ML models:",
                            points: [
                                "Adversarial training: Training on adversarial examples",
                                "Input validation: Detecting adversarial inputs",
                                "Model monitoring: Detecting model drift, anomalies",
                                "Differential privacy: Protecting training data privacy",
                                "Federated learning: Training without centralizing data",
                                "Model watermarking: Detecting model theft",
                                "Robust architectures: Designing resilient models"
                            ]
                        },
                        {
                            heading: "AI in Security",
                            content: "Using AI for defense:",
                            points: [
                                "Threat detection: ML-based anomaly detection",
                                "Malware classification: Identifying malicious software",
                                "Phishing detection: Identifying malicious emails",
                                "Behavioral analysis: UEBA, user profiling",
                                "Automated response: AI-driven incident response",
                                "Threat intelligence: Processing large threat datasets",
                                "Challenges: Adversarial attacks, false positives, explainability"
                            ]
                        },
                        {
                            heading: "Future Considerations",
                            content: "Emerging AI security topics:",
                            points: [
                                "Deepfakes: AI-generated fake media",
                                "AI-generated malware: Using AI to create attacks",
                                "Autonomous attacks: AI-driven attack systems",
                                "AI governance: Regulating AI use",
                                "Explainable AI: Understanding AI decisions",
                                "AI ethics: Bias, fairness, transparency",
                                "Quantum ML: Quantum computing impact on AI"
                            ]
                        }
                    ]
                }
            },
            {
                id: 6,
                title: "Quantum Computing & Post-Quantum Cryptography",
                icon: "⚛️",
                description: "Quantum computing threats, post-quantum cryptography, and preparing for the quantum future",
                duration: "19 min",
                content: {
                    introduction: "Quantum computing threatens current cryptographic systems. Understanding quantum threats and post-quantum cryptography is essential for future security.",
                    sections: [
                        {
                            heading: "Quantum Computing Basics",
                            content: "How quantum computers work:",
                            points: [
                                "Qubits: Quantum bits, can be in superposition",
                                "Superposition: Existing in multiple states simultaneously",
                                "Entanglement: Qubits linked regardless of distance",
                                "Quantum gates: Operations on qubits",
                                "Quantum algorithms: Shor's algorithm (factoring), Grover's algorithm (search)",
                                "Current state: NISQ (Noisy Intermediate-Scale Quantum) era",
                                "Timeline: Cryptographically relevant quantum computers (CRQC) in 10-30 years"
                            ]
                        },
                        {
                            heading: "Quantum Threats to Cryptography",
                            content: "What quantum computers break:",
                            points: [
                                "RSA: Shor's algorithm factors large numbers efficiently",
                                "ECC (Elliptic Curve Cryptography): Also broken by Shor's algorithm",
                                "Diffie-Hellman: Key exchange broken",
                                "Symmetric encryption: Grover's algorithm halves key strength (AES-256 becomes AES-128 equivalent)",
                                "Hash functions: Grover's algorithm reduces security",
                                "Timeline: 'Harvest now, decrypt later' - attackers collecting encrypted data now",
                                "Migration needed: Transition before CRQC exists"
                            ]
                        },
                        {
                            heading: "Post-Quantum Cryptography",
                            content: "Quantum-resistant algorithms:",
                            points: [
                                "Lattice-based: Based on lattice problems (NTRU, CRYSTALS-Kyber)",
                                "Code-based: Based on error-correcting codes (McEliece)",
                                "Hash-based: Based on hash functions (SPHINCS+)",
                                "Isogeny-based: Based on elliptic curve isogenies (SIKE)",
                                "Multivariate: Based on multivariate polynomials",
                                "NIST PQC Standardization: Selecting post-quantum standards",
                                "Hybrid approach: Combining classical and post-quantum"
                            ]
                        },
                        {
                            heading: "Migration Strategy",
                            content: "Preparing for quantum future:",
                            points: [
                                "Inventory: Identifying all cryptographic systems",
                                "Risk assessment: What needs protection longest?",
                                "Algorithm selection: Choosing post-quantum algorithms",
                                "Pilot programs: Testing in non-critical systems",
                                "Gradual migration: Phased rollout",
                                "Hybrid deployment: Running classical and post-quantum simultaneously",
                                "Timeline: Starting migration now, before CRQC exists"
                            ]
                        },
                        {
                            heading: "Quantum Key Distribution",
                            content: "Using quantum physics for security:",
                            points: [
                                "BB84 protocol: First QKD protocol",
                                "Quantum mechanics: Detecting eavesdropping",
                                "Unconditional security: Based on physics, not computational assumptions",
                                "Limitations: Distance, infrastructure requirements",
                                "Current deployments: Limited, experimental",
                                "Future: May complement post-quantum cryptography"
                            ]
                        }
                    ]
                }
            }
        ],
        quiz: [
            {
                question: "What is a zero-day vulnerability?",
                options: [
                    "A vulnerability that was discovered at midnight",
                    "A previously unknown vulnerability with no available patch",
                    "A vulnerability that affects zero systems",
                    "A vulnerability that takes zero time to exploit"
                ],
                correct: 1,
                explanation: "A zero-day vulnerability is a security flaw that is unknown to the vendor and has no available patch. The term 'zero-day' refers to zero days of protection."
            },
            {
                question: "What does APT stand for?",
                options: [
                    "Advanced Penetration Testing",
                    "Advanced Persistent Threat - sophisticated long-term attack campaigns",
                    "Automated Protection Technology",
                    "Application Performance Testing"
                ],
                correct: 1,
                explanation: "APT (Advanced Persistent Threat) refers to sophisticated, long-term attack campaigns typically associated with nation-states or well-funded groups."
            },
            {
                question: "What is fuzzing?",
                options: [
                    "A type of encryption",
                    "Automated input generation to find vulnerabilities",
                    "A network protocol",
                    "A malware detection technique"
                ],
                correct: 1,
                explanation: "Fuzzing is an automated software testing technique that involves providing invalid, unexpected, or random data as inputs to find vulnerabilities."
            },
            {
                question: "What are Spectre and Meltdown?",
                options: [
                    "Types of malware",
                    "CPU vulnerabilities related to speculative execution",
                    "Network protocols",
                    "Encryption algorithms"
                ],
                correct: 1,
                explanation: "Spectre and Meltdown are CPU vulnerabilities that exploit speculative execution to read memory that should be protected."
            },
            {
                question: "What is an adversarial example in machine learning?",
                options: [
                    "A training example",
                    "An input designed to fool an ML model",
                    "A type of neural network",
                    "A machine learning algorithm"
                ],
                correct: 1,
                explanation: "An adversarial example is an input to a machine learning model that is designed to cause the model to make a mistake, often through small, imperceptible perturbations."
            },
            {
                question: "What does Shor's algorithm do?",
                options: [
                    "Encrypts data",
                    "Factors large numbers efficiently on quantum computers, breaking RSA",
                    "Searches databases",
                    "Detects malware"
                ],
                correct: 1,
                explanation: "Shor's algorithm is a quantum algorithm that can factor large numbers efficiently, which would break RSA and other public-key cryptosystems."
            },
            {
                question: "What is post-quantum cryptography?",
                options: [
                    "Cryptography that uses quantum computers",
                    "Cryptographic algorithms designed to be secure against quantum computers",
                    "Cryptography for quantum networks",
                    "A type of quantum key distribution"
                ],
                correct: 1,
                explanation: "Post-quantum cryptography refers to cryptographic algorithms that are designed to be secure against attacks by both classical and quantum computers."
            },
            {
                question: "What is a side-channel attack?",
                options: [
                    "An attack through a network side channel",
                    "Extracting secrets through physical properties like timing or power consumption",
                    "An attack on wireless networks",
                    "A type of phishing attack"
                ],
                correct: 1,
                explanation: "A side-channel attack extracts secret information by analyzing physical properties of a system, such as timing, power consumption, or electromagnetic emissions."
            },
            {
                question: "What is responsible disclosure?",
                options: [
                    "Keeping vulnerabilities secret",
                    "Working with vendors to fix vulnerabilities before public disclosure",
                    "Immediately publishing vulnerabilities",
                    "Selling vulnerabilities to the highest bidder"
                ],
                correct: 1,
                explanation: "Responsible disclosure involves privately reporting vulnerabilities to vendors and giving them time to develop patches before public disclosure."
            },
            {
                question: "What is 'living off the land' in cybersecurity?",
                options: [
                    "Using cloud services",
                    "Using legitimate OS tools and utilities to avoid detection",
                    "Attacking from remote locations",
                    "Using open-source tools"
                ],
                correct: 1,
                explanation: "'Living off the land' refers to attackers using legitimate built-in OS tools (like PowerShell, WMI) to avoid detection, as these tools are less likely to trigger security alerts."
            }
        ],
        tips: [
            { icon: "💎", title: "Research Responsibly", description: "Follow responsible disclosure practices. Contribute to security through ethical research and bug bounties." },
            { icon: "🕵️", title: "Understand APTs", description: "Study advanced threat actors and their techniques. Knowledge of TTPs helps in detection and defense." },
            { icon: "🔬", title: "Practice Research", description: "Set up research environments, practice reverse engineering, fuzzing, and vulnerability research ethically." },
            { icon: "⚙️", title: "Consider Hardware", description: "Understand hardware-level security. Many attacks target hardware, not just software." },
            { icon: "🤖", title: "Secure AI Systems", description: "As AI becomes pervasive, understand adversarial ML and how to secure AI systems." },
            { icon: "⚛️", title: "Prepare for Quantum", description: "Start planning post-quantum migration now. Quantum computers will break current cryptography." }
        ]
    }
    },
    tips: [
        { icon: "🔒", title: "Use Unique Passwords", description: "Never reuse passwords across different accounts. If one account gets hacked, all your accounts could be at risk." },
        { icon: "📧", title: "Verify Before You Trust", description: "If an email or message seems suspicious, contact the company directly using their official website or phone number." },
        { icon: "🔍", title: "Check URLs Carefully", description: "Before entering personal information, verify the website address matches the company you think you're visiting." },
        { icon: "🔄", title: "Keep Software Updated", description: "Enable automatic updates on all your devices. Updates often include important security fixes." },
        { icon: "🔐", title: "Enable 2FA", description: "Add two-factor authentication to your important accounts. It's free and significantly increases your security." },
        { icon: "📱", title: "Lock Your Devices", description: "Use a PIN, password, or biometric lock (fingerprint/face ID) on all your devices." },
        { icon: "🚫", title: "Don't Share Passwords", description: "Never share your passwords with anyone, even people you trust. Legitimate companies will never ask for your password." },
        { icon: "💾", title: "Back Up Your Data", description: "Regularly back up important files to an external drive or cloud service. This protects you from ransomware and device failures." },
        { icon: "🛡️", title: "Use Antivirus Software", description: "Install reputable antivirus software and keep it updated. It helps protect against malware and viruses." },
        { icon: "👀", title: "Be Skeptical", description: "If something online seems too good to be true, it probably is. Be cautious of offers that seem unrealistic." }
    ],
    completedLessons: {},
    currentQuizQuestion: 0,
    quizScore: 0,
    quizAnswers: []
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderLevels();
    renderLessons();
    renderTips();
    updateProgress();
    setupNavigation();
    loadProgress();
    updateLevelSelectors();
}

// Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('href').substring(1);
            showSection(section);
        });
    });
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// Render Levels
function renderLevels() {
    const container = document.getElementById('levels-container');
    if (!container) return;
    
    const levelOrder = ['introduction', 'fundamentals', 'practitioner', 'intermediate', 'expert', 'master'];
    container.innerHTML = levelOrder.map((levelKey, index) => {
        const level = appState.levels[levelKey];
        if (!level) return '';
        
        const isLocked = index > 0 && !isLevelUnlocked(levelOrder[index - 1]);
        const completed = getLevelProgress(levelKey).completed;
        const total = getLevelProgress(levelKey).total;
        const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
        
        return `
            <div class="level-card ${levelKey} ${isLocked ? 'locked' : ''}" ${isLocked ? '' : `onclick="selectLevel('${levelKey}')"`}>
                <div class="level-icon">${level.icon}</div>
                <span class="level-badge ${levelKey}">${level.name}</span>
                <div class="level-title">${level.name} Level</div>
                <div class="level-description">${level.description}</div>
                <div class="level-stats">
                    <span>${completed}/${total} Lessons</span>
                    <span>${progress}% Complete</span>
                </div>
            </div>
        `;
    }).join('');
}

function isLevelUnlocked(levelKey) {
    const level = appState.levels[levelKey];
    if (!level) return false;
    const progress = getLevelProgress(levelKey);
    return progress.completed >= progress.total * 0.8; // 80% completion unlocks next level
}

function getLevelProgress(levelKey) {
    const level = appState.levels[levelKey];
    if (!level) return { completed: 0, total: 0 };
    
    const levelCompleted = appState.completedLessons[levelKey] || new Set();
    return {
        completed: levelCompleted.size,
        total: level.lessons.length
    };
}

function selectLevel(levelKey) {
    appState.currentLevel = levelKey;
    changeLevel(levelKey);
    showSection('lessons');
}

function changeLevel(levelKey) {
    appState.currentLevel = levelKey;
    const level = appState.levels[levelKey];
    if (!level) return;
    
    // Update level selector
    const levelSelect = document.getElementById('level-select');
    if (levelSelect) levelSelect.value = levelKey;
    
    // Update lessons title and intro
    const lessonsTitle = document.getElementById('lessons-title');
    if (lessonsTitle) lessonsTitle.textContent = `${level.name} Level Lessons`;
    
    const lessonsIntro = document.getElementById('lessons-intro');
    if (lessonsIntro) lessonsIntro.textContent = `Click on any lesson to start learning. Complete all lessons to master the ${level.name.toLowerCase()} level!`;
    
    renderLessons();
    updateProgress();
}

function changeQuizLevel(levelKey) {
    appState.currentQuizLevel = levelKey;
    const level = appState.levels[levelKey];
    if (!level) return;
    
    // Update quiz level selector
    const quizLevelSelect = document.getElementById('quiz-level-select');
    if (quizLevelSelect) quizLevelSelect.value = levelKey;
    
    // Update quiz intro
    const quizIntro = document.getElementById('quiz-intro');
    if (quizIntro) quizIntro.textContent = `Test your knowledge with these ${level.name.toLowerCase()} level cybersecurity questions!`;
}

function updateLevelSelectors() {
    const levelSelect = document.getElementById('level-select');
    const quizLevelSelect = document.getElementById('quiz-level-select');
    
    if (levelSelect) {
        levelSelect.value = appState.currentLevel;
    }
    if (quizLevelSelect) {
        quizLevelSelect.value = appState.currentQuizLevel;
    }
}

// Render Lessons
function renderLessons() {
    const container = document.getElementById('lessons-container');
    if (!container) return;
    
    const level = appState.levels[appState.currentLevel];
    if (!level || !level.lessons) return;
    
    container.innerHTML = level.lessons.map(lesson => {
        const levelCompleted = appState.completedLessons[appState.currentLevel] || new Set();
        const isCompleted = levelCompleted.has(lesson.id);
        return `
            <div class="lesson-card ${isCompleted ? 'completed' : ''}" onclick="openLesson(${lesson.id})">
                <div class="lesson-header">
                    <div class="lesson-icon">${lesson.icon}</div>
                    <div>
                        <div class="lesson-title">${lesson.title}</div>
                    </div>
                </div>
                <div class="lesson-description">${lesson.description}</div>
                <div class="lesson-meta">
                    <span>⏱️ ${lesson.duration}</span>
                    <span class="lesson-status ${isCompleted ? 'completed' : 'pending'}">
                        ${isCompleted ? '✓ Completed' : '○ Pending'}
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

// Open Lesson Modal
function openLesson(lessonId) {
    const level = appState.levels[appState.currentLevel];
    if (!level || !level.lessons) return;
    
    const lesson = level.lessons.find(l => l.id === lessonId);
    if (!lesson) return;
    
    const modal = document.createElement('div');
    modal.className = 'lesson-modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${lesson.icon} ${lesson.title}</h3>
                <button class="close-btn" onclick="closeLesson()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="lesson-content">
                    <p><strong>${lesson.content.introduction}</strong></p>
                    ${lesson.content.sections.map(section => `
                        <h4>${section.heading}</h4>
                        <p>${section.content}</p>
                        ${section.points ? `
                            <ul>
                                ${section.points.map(point => `<li>${point}</li>`).join('')}
                            </ul>
                        ` : ''}
                        ${section.note ? `<div class="highlight-box success">💡 ${section.note}</div>` : ''}
                    `).join('')}
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-primary" onclick="completeLesson(${lesson.id})">
                    Mark as Complete ✓
                </button>
                <button class="btn-primary" onclick="closeLesson()" style="background: var(--text-secondary);">
                    Close
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeLesson();
        }
    });
}

function closeLesson() {
    const modal = document.querySelector('.lesson-modal');
    if (modal) {
        modal.remove();
    }
}

function completeLesson(lessonId) {
    if (!appState.completedLessons[appState.currentLevel]) {
        appState.completedLessons[appState.currentLevel] = new Set();
    }
    appState.completedLessons[appState.currentLevel].add(lessonId);
    saveProgress();
    closeLesson();
    renderLessons();
    renderLevels();
    updateProgress();
}

// Render Tips
function renderTips() {
    const container = document.getElementById('tips-container');
    container.innerHTML = appState.tips.map(tip => `
        <div class="tip-card">
            <div class="tip-icon">${tip.icon}</div>
            <div class="tip-title">${tip.title}</div>
            <div class="tip-description">${tip.description}</div>
        </div>
    `).join('');
}

// Quiz Functions
function startQuiz() {
    appState.currentQuizQuestion = 0;
    appState.quizScore = 0;
    appState.quizAnswers = [];
    
    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('quiz-results').style.display = 'none';
    
    showQuestion();
}

function getCurrentQuiz() {
    const level = appState.levels[appState.currentQuizLevel];
    return level && level.quiz ? level.quiz : [];
}

function showQuestion() {
    const quiz = getCurrentQuiz();
    const question = quiz[appState.currentQuizQuestion];
    if (!question) {
        showQuizResults();
        return;
    }
    
    const container = document.getElementById('question-container');
    container.innerHTML = `
        <div class="question-card">
            <div class="question-text">${question.question}</div>
            <div class="answer-options">
                ${question.options.map((option, index) => `
                    <div class="answer-option" onclick="selectAnswer(${index})" id="option-${index}">
                        ${option}
                    </div>
                `).join('')}
            </div>
            <div class="quiz-actions" style="margin-top: 1.5rem;">
                <button class="btn-primary" onclick="submitAnswer()" id="submit-btn" disabled>
                    Submit Answer
                </button>
            </div>
        </div>
    `;
    
    updateQuizProgress();
}

let selectedAnswer = null;

function selectAnswer(index) {
    selectedAnswer = index;
    
    // Update UI
    document.querySelectorAll('.answer-option').forEach((opt, i) => {
        opt.classList.remove('selected');
        if (i === index) {
            opt.classList.add('selected');
        }
    });
    
    document.getElementById('submit-btn').disabled = false;
}

function submitAnswer() {
    if (selectedAnswer === null) return;
    
    const quiz = getCurrentQuiz();
    const question = quiz[appState.currentQuizQuestion];
    if (!question) return;
    
    const isCorrect = selectedAnswer === question.correct;
    
    if (isCorrect) {
        appState.quizScore++;
    }
    
    appState.quizAnswers.push({
        questionIndex: appState.currentQuizQuestion,
        selected: selectedAnswer,
        correct: question.correct,
        isCorrect: isCorrect
    });
    
    // Show correct/incorrect
    document.querySelectorAll('.answer-option').forEach((opt, i) => {
        opt.onclick = null;
        if (i === question.correct) {
            opt.classList.add('correct');
        } else if (i === selectedAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });
    
    // Show explanation
    const container = document.getElementById('question-container');
    const explanation = document.createElement('div');
    explanation.className = 'highlight-box';
    explanation.style.marginTop = '1.5rem';
    explanation.innerHTML = `<strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong><br>${question.explanation}`;
    container.querySelector('.question-card').appendChild(explanation);
    
    // Disable submit button
    document.getElementById('submit-btn').disabled = true;
    
    // Move to next question after a delay
    setTimeout(() => {
        appState.currentQuizQuestion++;
        selectedAnswer = null;
        const quiz = getCurrentQuiz();
        if (appState.currentQuizQuestion < quiz.length) {
            showQuestion();
        } else {
            showQuizResults();
        }
    }, 2000);
}

function showQuizResults() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    const quiz = getCurrentQuiz();
    const percentage = quiz.length > 0 ? Math.round((appState.quizScore / quiz.length) * 100) : 0;
    document.getElementById('final-score').textContent = percentage;
    
    const level = appState.levels[appState.currentQuizLevel];
    const levelName = level ? level.name : 'this level';
    
    let message = '';
    if (percentage >= 90) {
        if (appState.currentQuizLevel === 'introduction') {
            message = '🎉 Excellent! You\'ve mastered the Introduction level! Ready to move on to Fundamentals!';
        } else if (appState.currentQuizLevel === 'fundamentals') {
            message = '🎉 Excellent! You\'ve mastered the Fundamentals! Ready for the Practitioner level!';
        } else if (appState.currentQuizLevel === 'practitioner') {
            message = '🎉 Excellent! You\'ve mastered the Practitioner level! Ready for Intermediate!';
        } else if (appState.currentQuizLevel === 'intermediate') {
            message = '🎉 Excellent! You\'ve mastered the Intermediate level! Ready for Expert!';
        } else if (appState.currentQuizLevel === 'expert') {
            message = '🎉 Excellent! You\'ve mastered the Expert level! Ready for Master!';
        } else if (appState.currentQuizLevel === 'master') {
            message = '👑 Outstanding! You\'ve mastered the Master level! You\'re a cybersecurity master!';
        } else {
            message = `🎉 Excellent! You've mastered ${levelName}!`;
        }
    } else if (percentage >= 70) {
        if (appState.currentQuizLevel === 'introduction') {
            message = '👍 Great job! You have a solid understanding of introductory cybersecurity concepts.';
        } else if (appState.currentQuizLevel === 'fundamentals') {
            message = '👍 Great job! You have a good understanding of cybersecurity fundamentals.';
        } else if (appState.currentQuizLevel === 'practitioner') {
            message = '👍 Great job! You have a good grasp of practitioner-level security practices.';
        } else if (appState.currentQuizLevel === 'intermediate') {
            message = '👍 Great job! You have a solid understanding of intermediate cybersecurity concepts.';
        } else if (appState.currentQuizLevel === 'expert') {
            message = '👍 Great job! You have a strong understanding of expert-level cybersecurity.';
        } else if (appState.currentQuizLevel === 'master') {
            message = '👍 Great job! You have an advanced understanding of master-level cybersecurity topics.';
        } else {
            message = `👍 Great job! You have a good understanding of ${levelName.toLowerCase()} level concepts.`;
        }
    } else if (percentage >= 50) {
        message = `📚 Good effort! Review the ${levelName.toLowerCase()} level lessons and try again.`;
    } else {
        message = `💪 Keep learning! Review the ${levelName.toLowerCase()} level lessons and practice more.`;
    }
    
    document.getElementById('score-message').textContent = message;
    
    // Save quiz score per level
    localStorage.setItem(`quizScore-${appState.currentQuizLevel}`, percentage);
    updateProgress();
}

function resetQuiz() {
    document.getElementById('quiz-start').style.display = 'block';
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
}

function updateQuizProgress() {
    const quiz = getCurrentQuiz();
    const progress = quiz.length > 0 ? ((appState.currentQuizQuestion + 1) / quiz.length) * 100 : 0;
    document.getElementById('quiz-progress-bar').style.width = progress + '%';
    document.getElementById('current-question').textContent = appState.currentQuizQuestion + 1;
    document.getElementById('total-questions').textContent = quiz.length;
}

// Progress Tracking
function updateProgress() {
    // Calculate overall progress across all levels
    let totalLessons = 0;
    let totalCompleted = 0;
    
    Object.keys(appState.levels).forEach(levelKey => {
        const level = appState.levels[levelKey];
        if (level && level.lessons) {
            totalLessons += level.lessons.length;
            const levelCompleted = appState.completedLessons[levelKey] || new Set();
            totalCompleted += levelCompleted.size;
        }
    });
    
    const overallProgress = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;
    
    // Current level progress
    const currentLevelProgress = getLevelProgress(appState.currentLevel);
    const currentLevelPercent = currentLevelProgress.total > 0 
        ? Math.round((currentLevelProgress.completed / currentLevelProgress.total) * 100) 
        : 0;
    
    // Update UI
    const progressPercentEl = document.getElementById('progress-percent');
    if (progressPercentEl) progressPercentEl.textContent = overallProgress + '%';
    
    const lessonsCompletedEl = document.getElementById('lessons-completed');
    if (lessonsCompletedEl) lessonsCompletedEl.textContent = totalCompleted;
    
    const currentLevelEl = document.getElementById('current-level');
    if (currentLevelEl) {
        const level = appState.levels[appState.currentLevel];
        currentLevelEl.textContent = level ? level.name : 'Introduction';
    }
    
    const savedScore = localStorage.getItem(`quizScore-${appState.currentQuizLevel}`);
    if (savedScore) {
        const quizScoreEl = document.getElementById('quiz-score');
        if (quizScoreEl) quizScoreEl.textContent = savedScore + '%';
    }
}

// Save/Load Progress
function saveProgress() {
    const progress = {
        completedLessons: {},
        currentLevel: appState.currentLevel,
        currentQuizLevel: appState.currentQuizLevel
    };
    
    // Convert Sets to Arrays for JSON storage
    Object.keys(appState.completedLessons).forEach(levelKey => {
        progress.completedLessons[levelKey] = Array.from(appState.completedLessons[levelKey]);
    });
    
    localStorage.setItem('cybersecurityProgress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('cybersecurityProgress');
    if (saved) {
        try {
            const progress = JSON.parse(saved);
            
            // Restore completed lessons per level
            if (progress.completedLessons) {
                Object.keys(progress.completedLessons).forEach(levelKey => {
                    appState.completedLessons[levelKey] = new Set(progress.completedLessons[levelKey]);
                });
            }
            
            // Restore current levels
            if (progress.currentLevel) appState.currentLevel = progress.currentLevel;
            if (progress.currentQuizLevel) appState.currentQuizLevel = progress.currentQuizLevel;
            
            renderLessons();
            renderLevels();
            updateProgress();
            updateLevelSelectors();
        } catch (e) {
            console.error('Error loading progress:', e);
        }
    }
}

