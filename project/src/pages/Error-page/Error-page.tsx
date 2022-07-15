import React from 'react';

const styles = {
  img: {
    width: '480px',
    height: '270px',
  },
  page: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
};

function ErrorPage() {
  return (
    <div style={styles.page}>
      <img
        src='https://img4.goodfon.ru/original/1920x1080/8/cd/kot-vzgliad-udivlenie.jpg'
        style={styles.img}
      />
      <p>Error 404</p>
      <p>Page not found</p>
      <p>
        <a href='#'>Вернуться на главную страницу</a>
      </p>
    </div>
  );
}

export default ErrorPage;
