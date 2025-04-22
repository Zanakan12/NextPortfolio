interface SkillCategoryProps {
    title: string;
    skills: { name: string; icon: string }[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
    <section className="mb-12 text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">{title}</h2>
        <div className="h-1 w-10 bg-yellow-400 mx-auto mb-6" />
        <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
                <div
                    key={skill.name}
                    className="bg-[#1f1f2e] rounded-xl p-4 w-24 h-24 flex items-center justify-center shadow hover:scale-110 transition"
                >
                    <img src={skill.icon} alt={skill.name} title={skill.name} className="w-14 h-14 object-contain" />

                </div>
            ))}
        </div>
    </section>
);

export default function SkillGrid() {
    return (
        <div className="max-w-5xl mx-auto mt-16">
            <SkillCategory
                title="Programming Languages"
                skills={[
                    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
                    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                    { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
                    { name: "Rust", icon: "https://www.rust-lang.org/logos/rust-logo-512x512.png" },
                    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
                    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
                    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                ]}
            />
            <SkillCategory
                title="Frameworks"
                skills={[
                    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
                    { name: "Dear ImGui", icon: "https://raw.githubusercontent.com/wiki/sammyfreg/netImgui/Web/img/DearImGui.png" },
                    { name: "Android Studio", icon: "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png" },
                    { name: "Qt Creator", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg" },
                    { name: "MIT App Inventor", icon: "https://appinventor.mit.edu/images/logo.png" },
                    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                ]}
            />
            <SkillCategory
                title="Tools & Extras"
                skills={[
                    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
                    { name: "UML", icon: "https://www.shutterstock.com/image-vector/uml-unified-modeling-language-acronym-260nw-1816305929.jpg" },
                    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                    { name: "API", icon: "https://www.svgrepo.com/show/489281/api.svg" },
                    { name: "WebSocket", icon: "https://static-00.iconduck.com/assets.00/websocket-icon-256x192-len8oge9.png" },
                ]}
            />
        </div>
    );
}
