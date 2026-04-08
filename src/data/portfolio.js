export const portfolioData = {
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" }
  ],
  hero: {
    name: "Vinicius Ferreira",
    role: "Full Stack Developer",
    description:
      "Desenvolvo aplicações web com foco em performance, clareza de arquitetura e boas práticas."
  },
  sections: {
    about: {
      eyebrow: "Sobre mim",
      title: "Formação, stack e foco em desenvolvimento full stack.",
      description:
        "Sou estudante de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento full stack."
    },
    skills: {
      eyebrow: "Skills",
      title: "Stack organizada para construir aplicações completas.",
      description:
        "Tecnologias distribuídas entre interface, backend, dados e ferramentas de apoio para desenvolvimento moderno e escalável."
    },
    projects: {
      eyebrow: "Projetos",
      title: "Projetos com foco em clareza, estrutura e valor técnico.",
      description:
        "Seleção de trabalhos voltados à construção de interfaces, APIs e automações com abordagem profissional e preocupação real com manutenção."
    },
    contact: {
      eyebrow: "Contato",
      title: "Disponível para conexões profissionais e novas oportunidades.",
      description:
        "Meus canais de contato estão disponíveis abaixo para conexões profissionais e oportunidades."
    }
  },
  about: [
    {
      title: "Experiência técnica",
      text:
        "Tenho experiência com C#, .NET e construção de APIs REST, além de atuar no front-end com React, HTML, CSS e JavaScript."
    },
    {
      title: "Ferramentas e práticas",
      text:
        "Também possuo conhecimento em SQL Server, Git, Docker e boas práticas de desenvolvimento."
    },
    {
      title: "Direção profissional",
      text:
        "Busco desenvolver soluções bem estruturadas, com código limpo e foco em evolução contínua."
    }
  ],
  skillGroups: [
    {
      title: "Front-end",
      skills: [
        { name: "JavaScript", icon: "javascript", color: "#f7df1e" },
        { name: "React", icon: "react", color: "#61dafb" },
        { name: "HTML", icon: "html", color: "#e34f26" },
        { name: "CSS", icon: "css", color: "#1572b6" }
      ]
    },
    {
      title: "Back-end",
      skills: [
        { name: "C#", icon: "csharp", color: "#9b4f96" },
        { name: ".NET", icon: "dotnet", color: "#7c8cff" },
        { name: "APIs REST", icon: "api", color: "#8bb8ff" },
        { name: "RabbitMQ", icon: "rabbitmq", color: "#ff6600" }
      ]
    },
    {
      title: "Banco de dados",
      skills: [{ name: "SQL Server", icon: "sqlserver", color: "#c7d2e5" }]
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git", icon: "git", color: "#f05032" },
        { name: "Docker", icon: "docker", color: "#2496ed" },
        { name: "Azure DevOps", icon: "azuredevops", color: "#0078d4" }
      ]
    }
  ],
  projects: [
    {
      name: "StoreManager",
      description:
        "Sistema CRUD para gerenciamento de informações com foco em organização de fluxo, clareza de interface e usabilidade para operações do dia a dia.",
      stack: ["C#", ".NET", "SQL Server"],
      github: "#",
      demo: "#"
    },
    {
      name: "API de Calculadora",
      description:
        "API criada para estudo de endpoints, organização de backend e documentação de serviços com respostas previsíveis e estrutura limpa.",
      stack: [".NET", "Swagger", "REST"],
      github: "#",
      demo: "#"
    },
    {
      name: "Crawler de Vagas",
      description:
        "Projeto voltado à coleta e organização de vagas de tecnologia por automação, facilitando análise de dados e monitoramento de oportunidades.",
      stack: ["Automação", "Coleta de Dados", "Processamento"],
      github: "#",
      demo: "#"
    }
  ],
  contact: {
    links: [
      {
        label: "GitHub",
        value: "github.com/viniciusRSFerreira",
        href: "https://github.com/viniciusRSFerreira"
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/vinicius-ferreira-214976247",
        href: "https://www.linkedin.com/in/vinicius-ferreira-214976247/"
      },
      {
        label: "Email",
        value: "viniciusroquesf@gmail.com",
        href: "mailto:viniciusroquesf@gmail.com"
      }
    ]
  }
};
