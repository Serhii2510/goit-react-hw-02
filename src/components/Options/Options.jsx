import css from './Options.module.css';

const Options = ({ totalFeedback, updateFeedback, feedbackReset }) => {
  return (
    <div className={css.optionsBtnContainer}>
      <button
        type="button"
        className={css.optionsBtn}
        onClick={() => updateFeedback('good')}
      >
        Good
      </button>
      <button
        type="button"
        className={css.optionsBtn}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.optionsBtn}
        onClick={() => updateFeedback('bad')}
      >
        Bad
      </button>
      <button
        type="button"
        className={totalFeedback ? css.optionsBtn : css.hidden}
        onClick={feedbackReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Options;
