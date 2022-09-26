type fn = (str: string) => string;

interface kebabCase extends fn {
    reverse: fn
}

const kebabCase: kebabCase;

export default kebabCase;
