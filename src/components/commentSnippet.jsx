const CommentSnippet = () => {
  const codeLines = [
    { num: 1, content: '/**', type: 'comment' },
    { num: 2, content: ' * About me', type: 'comment' },
    { num: 3, content: ' * I have 5 years of experience in web', type: 'comment' },
    { num: 4, content: ' * development lorem ipsum dolor sit amet,', type: 'comment' },
    { num: 5, content: ' * consectetur adipiscing elit, sed do eiusmod', type: 'comment' },
    { num: 6, content: ' * tempor incididunt ut labore et dolore', type: 'comment' },
    { num: 7, content: ' * magna aliqua. Ut enim ad minim veniam,', type: 'comment' },
    { num: 8, content: ' * quis nostrud exercitation ullamco laboris', type: 'comment' },
    { num: 9, content: ' * nisi ut aliquip ex ea commodo consequat.', type: 'comment' },
    { num: 10, content: ' * Duis aute irure dolor in reprehenderit in', type: 'comment' },
    { num: 11, content: ' *', type: 'comment' },
    { num: 12, content: ' * Duis aute irure dolor in reprehenderit in', type: 'comment' },
    { num: 13, content: ' * voluptate velit esse cillum dolore eu fugiat', type: 'comment' },
    { num: 14, content: ' * nulla pariatur. Excepteur sint occaecat', type: 'comment' },
    { num: 15, content: ' * officia deserunt mollit anim id est laborum.', type: 'comment' },
    { num: 16, content: ' */', type: 'comment' }
  ];

  const containerStyle = {
    fontFamily: '"Intel One Mono", "Fira Code", "Cascadia Code", "JetBrains Mono", Consolas, "Courier New", monospace',
    backgroundColor: '#1e293b',
    color: '#e2e8f0',
    padding: '20px',
    borderRadius: '12px',
    fontSize: '14px',
    lineHeight: '1.6',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
    border: '1px solid #334155',
    maxWidth: '600px',
    margin: '20px auto',
    overflow: 'auto'
  };

  const lineStyle = {
    display: 'flex',
    alignItems: 'center',
    minHeight: '24px',
    paddingLeft: '10px',
    paddingRight: '10px',
    transition: 'background-color 0.2s ease',
    cursor: 'default'
  };

  const lineNumberStyle = {
    color: '#64748b',
    marginRight: '20px',
    width: '30px',
    textAlign: 'right',
    fontSize: '12px',
    userSelect: 'none',
    flexShrink: 0
  };

  const commentStyle = {
    color: '#94a3b8',
    fontStyle: 'italic'
  };

  const handleLineHover = (e) => {
    e.currentTarget.style.backgroundColor = '#334155';
  };

  const handleLineLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
  };

  return (
    <div style={containerStyle}>
      <div style={{
        marginBottom: '15px',
        paddingBottom: '10px',
        borderBottom: '1px solid #334155',
        color: '#cbd5e1',
        fontSize: '16px',
        fontWeight: '600'
      }}>
        📝 About Me - Code Comment
      </div>
      
      <div>
        {codeLines.map((line) => (
          <div
            key={line.num}
            style={lineStyle}
            onMouseEnter={handleLineHover}
            onMouseLeave={handleLineLeave}
          >
            <span style={lineNumberStyle}>{line.num}</span>
            <span style={commentStyle}>
              {line.content}
            </span>
          </div>
        ))}
      </div>
      
      <div style={{
        marginTop: '15px',
        paddingTop: '10px',
        borderTop: '1px solid #334155',
        fontSize: '12px',
        color: '#64748b',
        textAlign: 'center'
      }}>
        💡 Hover over lines to highlight • Developer Bio Template
      </div>
    </div>
  );
};

export default CommentSnippet;