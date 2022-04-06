interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Any name provided'}</strong>
      <p>{props.repository?.description ?? 'Any description provided.'}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}
