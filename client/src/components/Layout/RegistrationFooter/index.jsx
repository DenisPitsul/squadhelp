import React from 'react';
import styles from './RegistrationFooter.module.sass';
import questionsAnswers from './questionsAnswers.json';

const RegistrationFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.articlesMainContainer}>
        {questionsAnswers.map(column => (
          <div className={styles.ColumnContainer}>
            {column.map(({ question, answer }) => (
              <>
                <div className={styles.headerArticle}>{question}</div>
                <div className={styles.article}>{answer}</div>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationFooter;
