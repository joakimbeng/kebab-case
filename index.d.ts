type fn = (str: string) => string;

interface kebabCase extends fn {
    reverse: (str: string) => string
}

const kebabCase: kebabCase;

export default kebabCase;
