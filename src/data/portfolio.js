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
    role: "Desenvolvedor Full Stack",
    description:
      "Desenvolvo aplicações web com foco em clareza, desempenho e boas práticas."
  },
  sections: {
    about: {
      eyebrow: "Sobre mim",
      title: "Perfil técnico com foco em desenvolvimento full stack.",
      description:
        "Sou estudante de Análise e Desenvolvimento de Sistemas, com atuação em aplicações web e APIs REST, unindo visão de front-end, back-end e organização técnica."
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Stack organizada para desenvolver aplicações completas.",
      description:
        "Tecnologias distribuídas entre interface, back-end, dados e ferramentas de apoio para um desenvolvimento moderno e escalável."
    },
    projects: {
      eyebrow: "Projetos",
      title: "Projetos com foco em clareza, estrutura e valor técnico.",
      description:
        "Seleção de trabalhos voltados à construção de interfaces, APIs e automações, com abordagem profissional e atenção real à manutenção."
    },
    contact: {
      eyebrow: "Contato",
      title: "Disponível para conexões profissionais e novas oportunidades.",
      description:
        "Meus canais de contato estão disponíveis abaixo para conversas profissionais e novas oportunidades."
    }
  },
  about: [
    {
      title: "Formação e atuação",
      text:
        "Sou estudante de Análise e Desenvolvimento de Sistemas, com atuação em desenvolvimento full stack e experiência prática na construção de aplicações web e APIs REST."
    },
    {
      title: "Stack principal",
      text:
        "Atuo com C#, .NET, React, HTML, CSS e JavaScript, além de SQL Server, Git e Docker aplicados ao desenvolvimento, versionamento e organização do ambiente."
    },
    {
      title: "Direção técnica",
      text:
        "Meu foco está em código limpo, organização da solução, boas práticas de desenvolvimento e evolução contínua da base técnica."
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
        "Sistema CRUD desenvolvido em C# e .NET para gestão de dados, com integração ao SQL Server, organização das regras de negócio e operações de cadastro, edição e consulta.",
      stack: ["C#", ".NET", "SQL Server"],
      github: "#",
      demo: "#"
    },
    {
      name: "API de Calculadora",
      description:
        "API REST em .NET para operações aritméticas, estruturada com endpoints objetivos, respostas previsíveis e documentação via Swagger para testes e consumo do serviço.",
      stack: [".NET", "Swagger", "REST"],
      github: "#",
      demo: "#"
    },
    {
      name: "Crawler de Vagas",
      description:
        "Crawler para coleta automatizada de vagas na área de tecnologia, com extração, organização e processamento de dados para monitoramento de oportunidades e análise estruturada das informações capturadas.",
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
