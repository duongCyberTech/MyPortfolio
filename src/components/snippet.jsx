import React, { useState, useEffect } from 'react';
import { Star, Eye, X, Code, User, Plus } from 'lucide-react';
import '../styled/card.css';

// Custom MUI-style components with JSX
const Card = ({ children, className = '', elevation = 1, ...props }) => (
  <div 
    className={`mui-card mui-elevation-${elevation} ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`mui-card-content ${className}`}>
    {children}
  </div>
);

const Avatar = ({ children, className = '', size = 'medium' }) => (
  <div className={`mui-avatar mui-avatar-${size} ${className}`}>
    {children}
  </div>
);

const IconButton = ({ children, onClick, className = '', color = 'default' }) => (
  <button 
    className={`mui-icon-button mui-icon-button-${color} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Button = ({ children, onClick, variant = 'text', startIcon, className = '' }) => (
  <button 
    className={`mui-button mui-button-${variant} ${className}`}
    onClick={onClick}
  >
    {startIcon && <span className="mui-button-start-icon">{startIcon}</span>}
    {children}
  </button>
);

const Chip = ({ label, size = 'medium', className = '' }) => (
  <span className={`mui-chip mui-chip-${size} ${className}`}>
    {label}
  </span>
);

const Typography = ({ children, variant = 'body1', className = '', component = 'div' }) => {
  const Component = component;
  return (
    <Component className={`mui-typography mui-typography-${variant} ${className}`}>
      {children}
    </Component>
  );
};

const Paper = ({ children, className = '', elevation = 1 }) => (
  <div className={`mui-paper mui-elevation-${elevation} ${className}`}>
    {children}
  </div>
);

const CodeSnippetShowcase = ({dataGen}) => {

  const [snippets, setSnippets] = useState([
    {
      id: 1,
      username: '@dCyberTech',
      createdAt: '2 days ago',
      stars: 0,
      isStarred: false,
      code: `// DTO for creating education records
export class CreateEducationDto {
  @ApiProperty({ 
    description: 'School name',
    example: ${dataGen ? dataGen.name : 'Le Quy Don High School'}
  })
  @IsNotEmpty()
  @IsString()
  @Length(2, 100)
  label: string;

  @ApiProperty({ 
    description: 'School location',
    example: ${dataGen ? dataGen.location : 'Ho Chi Minh City'}
  })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({ 
    description: 'Specialization subject',
    example: ${dataGen ? dataGen.specialization : 'Physics'}
  })
  @IsOptional()
  @IsString()
  spec?: string;

  @ApiProperty({ 
    description: 'Academic years',
    example: ${dataGen ? dataGen.years : '2022 - 2026'}
  })
  @IsNotEmpty()
  @Matches(/^\d{4}\s*-\s*\d{4}$/, {
    message: 'Years must be in format "YYYY - YYYY"'
  })
  years: string;
}

// Entity for database mapping
@Entity('high_schools')
export class HighSchool extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  @Index()
  label: string;

  @Column({ length: 50 })
  location: string;

  @Column({ length: 50, nullable: true })
  spec?: string;

  @Column({ length: 20 })
  years: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Student, student => student.education)
  students: Student[];
}`,
      language: 'typescript',
      description: 'Complete NestJS DTO and Entity definitions with validation decorators, Swagger documentation, and TypeORM mapping for the education system.',
      showDescription: true
    }
  ]);
  useEffect(() => {
    setSnippets([
    {
      id: 1,
      username: '@dCyberTech',
      createdAt: '2 days ago',
      stars: 0,
      isStarred: false,
      code: `// DTO for creating education records
export class CreateEducationDto {
  @ApiProperty({ 
    description: 'School name',
    example: ${dataGen ? dataGen.name : 'Le Quy Don High School'}
  })
  @IsNotEmpty()
  @IsString()
  @Length(2, 100)
  label: string;

  @ApiProperty({ 
    description: 'School location',
    example: ${dataGen ? dataGen.location : 'Ho Chi Minh City'}
  })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({ 
    description: 'Specialization subject',
    example: ${dataGen ? dataGen.specialization : 'Physics'}
  })
  @IsOptional()
  @IsString()
  spec?: string;

  @ApiProperty({ 
    description: 'Academic years',
    example: ${dataGen ? dataGen.years : '2022 - 2026'}
  })
  @IsNotEmpty()
  @Matches(/^\d{4}\s*-\s*\d{4}$/, {
    message: 'Years must be in format "YYYY - YYYY"'
  })
  years: string;
}

// Entity for database mapping
@Entity('high_schools')
export class HighSchool extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  @Index()
  label: string;

  @Column({ length: 50 })
  location: string;

  @Column({ length: 50, nullable: true })
  spec?: string;

  @Column({ length: 20 })
  years: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Student, student => student.education)
  students: Student[];
}`,
      language: 'typescript',
      description: 'Complete NestJS DTO and Entity definitions with validation decorators, Swagger documentation, and TypeORM mapping for the education system.',
      showDescription: true
    }
  ]);
  }, [dataGen]);
  const toggleStar = (id) => {
    setSnippets(prev => prev.map(snippet => 
      snippet.id === id 
        ? { 
            ...snippet, 
            isStarred: !snippet.isStarred,
            stars: snippet.isStarred ? snippet.stars - 1 : snippet.stars + 1
          }
        : snippet
    ));
  };

  const toggleDescription = (id) => {
    setSnippets(prev => prev.map(snippet => 
      snippet.id === id 
        ? { ...snippet, showDescription: !snippet.showDescription }
        : snippet
    ));
  };

    const syntaxHighlight = (code) => {
        // First, protect strings and template literals by replacing them with placeholders
        const stringMatches = [];
        let stringIndex = 0;
        
        // Handle template literals first (backticks)
        let processedCode = code.replace(/`[^`]*`/g, (match) => {
        const placeholder = `__TEMPLATE_LITERAL_${stringIndex}__`;
        stringMatches[stringIndex] = `<span class="syntax-string">${match}</span>`;
        stringIndex++;
        return placeholder;
        });
        
        // Handle single and double quotes
        processedCode = processedCode.replace(/('[^']*'|"[^"]*")/g, (match) => {
        const placeholder = `__STRING_${stringIndex}__`;
        stringMatches[stringIndex] = `<span class="syntax-string">${match}</span>`;
        stringIndex++;
        return placeholder;
        });
        
        // Handle comments
        processedCode = processedCode.replace(/(\/\/.*$)/gm, (match) => {
        const placeholder = `__COMMENT_${stringIndex}__`;
        stringMatches[stringIndex] = `<span class="syntax-comment">${match}</span>`;
        stringIndex++;
        return placeholder;
        });
        
        // Now apply syntax highlighting to the remaining code
        processedCode = processedCode
        // Keywords (with word boundaries to avoid partial matches)
        .replace(/\b(export|class|extends|function|const|let|var|return|async|await|try|catch|throw|interface|type|import|if|else|new)\b/g, '<span class="syntax-keyword">$1</span>')
        // Decorators
        .replace(/(@\w+)/g, '<span class="syntax-decorator">$1</span>')
        // Functions (word followed by opening parenthesis)
        .replace(/\b(\w+)(?=\()/g, '<span class="syntax-function">$1</span>')
        // NestJS classes (Controller, Service, etc.)
        .replace(/\b([A-Z]\w*(?:Controller|Service|Guard|Pipe|Repository|Exception|Dto))\b/g, '<span class="syntax-class">$1</span>')
        // Other types (capitalized words)
        .replace(/\b([A-Z]\w*)\b/g, '<span class="syntax-type">$1</span>');
        
        // Restore protected strings, template literals, and comments
        for (let i = stringIndex - 1; i >= 0; i--) {
        processedCode = processedCode.replace(new RegExp(`__(?:STRING|TEMPLATE_LITERAL|COMMENT)_${i}__`, 'g'), stringMatches[i]);
        }
        
        return processedCode;
    };

  return (
    <div className="app-container">
      <div className="content-container">
        <Typography variant="h6" className="header-text">
          // Education
        </Typography>

        <div className="snippets-container">
          {snippets.map((snippet) => (
            <Card key={snippet.id} elevation={2}>
              <CardContent>
                <div className="card-header">
                  <div className="user-info">
                    <Avatar>
                      <User size={16} />
                    </Avatar>
                    <div className="user-details">
                      <div className="username">{snippet.username}</div>
                      <div className="created-date">Created {snippet.createdAt}</div>
                    </div>
                  </div>
                  
                  <div className="card-actions">
                    <Button startIcon={<Eye size={16} />}>
                      details
                    </Button>
                    <IconButton
                      onClick={() => toggleStar(snippet.id)}
                      color={snippet.isStarred ? 'warning' : 'default'}
                    >
                      <Star 
                        size={16} 
                        fill={snippet.isStarred ? 'currentColor' : 'none'} 
                      />
                    </IconButton>
                    <span className="stars-count">
                      {snippet.stars} stars
                    </span>
                  </div>
                </div>

                <Paper className="code-container" elevation={1}>
                  <div className="code-header">
                    <Code size={16} color="var(--text-disabled)" />
                    <Chip label={snippet.language} size="small" />
                  </div>
                  <div 
                    className="code-content"
                    dangerouslySetInnerHTML={{ 
                      __html: syntaxHighlight(snippet.code) 
                    }}
                  />
                </Paper>

                {snippet.showDescription && snippet.description && (
                  <div className="description-container">
                    <IconButton
                      onClick={() => toggleDescription(snippet.id)}
                      className="close-button"
                      size="small"
                    >
                      <X size={16} />
                    </IconButton>
                    <div className="description-text">
                      {snippet.description}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <button className="add-button">
          <Plus size={20} />
          Add New Snippet
        </button> */}
      </div>
    </div>
  );
};

   

export default CodeSnippetShowcase;