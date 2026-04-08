export const portfolioData = {
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" }
  ],
  hero: {
    name: "Vinicius Ferreira",
    role: "Full Stack Developer",
    description:
      "Desenvolvo aplicacoes web com foco em clareza, performance e boas praticas."
  },
  sections: {
    about: {
      eyebrow: "Sobre mim",
      title: "Perfil tecnico com foco em desenvolvimento full stack.",
      description:
        "Estudante de Analise e Desenvolvimento de Sistemas, com atuacao em aplicacoes web e APIs REST, combinando visao de front-end, back-end e organizacao tecnica."
    },
    skills: {
      eyebrow: "Skills",
      title: "Stack organizada para construir aplicacoes completas.",
      description:
        "Tecnologias distribuidas entre interface, backend, dados e ferramentas de apoio para desenvolvimento moderno e escalavel."
    },
    projects: {
      eyebrow: "Projetos",
      title: "Projetos com foco em clareza, estrutura e valor tecnico.",
      description:
        "Selecao de trabalhos voltados a construcao de interfaces, APIs e automacoes com abordagem profissional e preocupacao real com manutencao."
    },
    contact: {
      eyebrow: "Contato",
      title: "Disponivel para conexoes profissionais e novas oportunidades.",
      description:
        "Meus canais de contato estao disponiveis abaixo para conexoes profissionais e oportunidades."
    }
  },
  about: [
    {
      title: "Formacao e atuacao",
      text:
        "Sou estudante de Analise e Desenvolvimento de Sistemas, com atuacao em desenvolvimento full stack e experiencia pratica na construcao de aplicacoes web e APIs REST."
    },
    {
      title: "Stack principal",
      text:
        "C#, .NET, React, HTML, CSS e JavaScript, alem de SQL Server, Git e Docker aplicados ao desenvolvimento, versionamento e organizacao do ambiente."
    },
    {
      title: "Direcao tecnica",
      text:
        "Meu foco esta em codigo limpo, organizacao da solucao, boas praticas de desenvolvimento e evolucao continua da base tecnica."
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
      skills: [
        { name: "SQL Server", icon: "sqlserver", color: "#c7d2e5" },
        { name: "PostgreSQL", icon: "postgresql", color: "#336791" }
      ]
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git", icon: "git", color: "#f05032" },
        { name: "Docker", icon: "docker", color: "#2496ed" },
        { name: "Azure DevOps", icon: "azuredevops", color: "#0078d4" },
        { name: "Postman", icon: "postman", color: "#ff6c37" }
      ]
    }
  ],
  projects: [
    {
      name: "StoreManager",
      description:
        "Sistema CRUD desenvolvido em C# e .NET para gestao de dados, com integracao ao SQL Server, organizacao das regras de negocio e operacoes de cadastro, edicao e consulta.",
      stack: ["C#", ".NET", "SQL Server"],
      github: "#",
      demo: "#"
    },
    {
      name: "API de Calculadora",
      description:
        "API REST em .NET para operacoes aritmeticas, estruturada com endpoints objetivos, respostas previsiveis e documentacao via Swagger para teste e consumo do servico.",
      stack: [".NET", "Swagger", "REST"],
      github: "#",
      demo: "#"
    },
    {
      name: "Crawler de Vagas",
      description:
        "Crawler para coleta automatizada de vagas de tecnologia, com extracao, organizacao e processamento dos dados para monitoramento de oportunidades e analise estruturada das informacoes capturadas.",
      stack: ["Automacao", "Coleta de Dados", "Processamento"],
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
